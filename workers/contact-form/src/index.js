export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    try {
      const data = await request.json();

      // Validate required fields
      const requiredFields = ['nom', 'prenom', 'email', 'sujet', 'message'];
      for (const field of requiredFields) {
        if (!data[field]) {
          return new Response(JSON.stringify({ error: `Le champ ${field} est requis` }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return new Response(JSON.stringify({ error: 'Email invalide' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      // Build email content
      const emailContent = `
Nouveau message depuis le formulaire de contact Perfex
======================================================

INFORMATIONS DE CONTACT
-----------------------
Nom: ${data.nom}
Prénom: ${data.prenom}
Email: ${data.email}
Entreprise: ${data.entreprise || 'Non renseigné'}
Téléphone: ${data.telephone || 'Non renseigné'}

DEMANDE
-------
Sujet: ${data.sujet}

Message:
${data.message}

======================================================
Envoyé depuis perfex-vitrine.pages.dev
      `.trim();

      // Send email using MailChannels (free with Cloudflare Workers)
      const emailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: env.TO_EMAIL, name: 'DevFactory Contact' }],
              reply_to: { email: data.email, name: `${data.prenom} ${data.nom}` },
            },
          ],
          from: {
            email: env.FROM_EMAIL,
            name: 'Perfex Contact Form',
          },
          subject: `[Perfex] ${data.sujet} - ${data.prenom} ${data.nom}`,
          content: [
            {
              type: 'text/plain',
              value: emailContent,
            },
          ],
        }),
      });

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text();
        console.error('MailChannels error:', errorText);
        return new Response(JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'email' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      return new Response(JSON.stringify({ success: true, message: 'Email envoyé avec succès' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
