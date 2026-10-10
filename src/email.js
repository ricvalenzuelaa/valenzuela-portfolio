import emailjs from 'emailjs-com';

export function initEmailJS() {
  emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
}

export function sendEmail(contact, payload) {
  const templateParams = {
    name: contact.name,
    email: contact.email,
    subject: payload.subject,
    message: payload.message,
  };

  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams
  );
}

export async function sendEmailToList(listId, payload) {
  const response = await fetch(
    'https://api.emailjs.com/api/v1.0/email/send-list',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_USER_ID,
        list_id: listId,
        template_params: payload,
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Email list send failed: ${errText}`);
  }
  return response.json();
}
