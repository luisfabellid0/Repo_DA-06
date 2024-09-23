$(document).ready(function() {
    $('.nav-link').on('click', function() {
        const selectedItem = $(this).text();
        let content = '';

        switch (selectedItem) {
            case 'Inicio':
                content = '<h2>Bienvenido a nuestra página de inicio</h2><p>Aquí encontrarás información general.</p>';
                break;
            case 'Servicios':
                content = '<h2>Nuestros Servicios</h2><p>Ofrecemos una variedad de servicios para satisfacer tus necesidades.</p>';
                break;
            case 'Contacto':
                content = '<h2>Contacto</h2><p>Puedes contactarnos a través de nuestro formulario en línea.</p>';
                break;
            default:
                content = '<h2>Error</h2><p>Elemento no reconocido.</p>';
        }

        $('#content').html(content);
    });
});