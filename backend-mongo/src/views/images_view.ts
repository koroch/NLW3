import Image from '../schemas/Image';

export default {
    render(image: Image){
        console.log(image)
        const newId = String(image.id);
        return{
            id: newId,
            url: `http://localhost:3333/uploads/${image.path}`
        };
    },

    renderMany(images: Image[]){
        console.log(images)
        return images.map(image => this.render(image));
    }
}