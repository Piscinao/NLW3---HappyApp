import Image from "../models/Image"

export default {
  render(image: Image) {
    return{
        id: image.id,
        url: `http://192.168.0.9:3333/uploads/${image.path}`
      };
    },

    // percorre todos orfanatos e para cada um deles mostra o método de cima
    renderMany(images: Image[]) {
      return images.map(image => this.render(image));
    }
  };