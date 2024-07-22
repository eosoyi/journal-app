export const fileUpload = async (file: File) => {
    if (!file) throw new Error('No tenemos ningun archivo a subir');

    const cloudURL = 'https://api.cloudinary.com/v1_1/dlxszxj6n/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const response = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(' No se pudo subir la imagen');
        }

        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}