export default function handler(req, res) {
    // Captura o seu domínio automaticamente (ex: seu-site.vercel.app)
    const host = req.headers.host;
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const domain = `${protocol}://${host}`;

    // Caminho da sua imagem na raiz do GitHub
    // Mude de .png para .jpg aqui se o seu arquivo for JPG
    const imageUrl = `${domain}/capa.png`; 

    // Monta o HTML com as tags do Open Graph para o WhatsApp
    const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Molduras HQ - Crie e Compartilhe</title>
        
        <!-- Open Graph (O que faz a capa aparecer no Zap) -->
        <meta property="og:title" content="Molduras HQ - Aplicativo">
        <meta property="og:description" content="Acesse agora para ajustar suas fotos com molduras exclusivas em alta resolução.">
        <meta property="og:image" content="${imageUrl}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:url" content="${domain}/api/share">
        <meta property="og:type" content="website">

        <!-- Twitter Card (Caso compartilhem no Twitter/X) -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Molduras HQ">
        <meta name="twitter:description" content="Ajuste suas fotos com molduras exclusivas.">
        <meta name="twitter:image" content="${imageUrl}">

        <!-- Redirecionamento Automático para o usuário -->
        <!-- O robô do WhatsApp lê o HTML acima, mas se um humano clicar no link, ele vai para a página principal (/) -->
        <meta http-equiv="refresh" content="0;url=/">
    </head>
    <body>
        <p>Carregando o aplicativo...</p>
        <script>
            // Redirecionamento imediato via JavaScript
            window.location.replace("/");
        </script>
    </body>
    </html>
    `;

    // Envia o HTML de volta para quem acessou a URL
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
}
