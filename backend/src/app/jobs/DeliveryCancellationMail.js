import Mail from '../../lib/Mail';

class DeliveryCancellationMail {
  get key() {
    return 'DeliveryCancellationMail';
  }

  async handle({ data }) {
    const { deliveryman, delivery, recipient } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'FastFeet - Cancelamento de Entrega',
      template: 'deliverycancellation',
      context: {
        deliveryman: deliveryman.name,
        product: delivery.product,
        recipient,
        images: {
          logo: `${process.env.APP_URL}/assets/logo.png`,
          product: `${process.env.APP_URL}/assets/email-produto.png`,
          customer: `${process.env.APP_URL}/assets/email-cliente.png`,
          address: `${process.env.APP_URL}/assets/email-endereco.png`,
        },
      },
    });
  }
}

export default new DeliveryCancellationMail();
