export default function handler(req, res) {
    // 1. Fixamos o seu domínio oficial
    const domain = 'https://tocomchico.vercel.app';
    
    // 2. Fixamos o caminho exato da imagem 
    // (Mude para capa.jpg se o seu arquivo não for .png)
    const imageUrl = `${domain}/capa.png`; 

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
        
        <!-- Tags turbinadas para forçar a leitura da imagem -->
        <meta property="og:image" itemprop="image" content="${imageUrl}">
        <meta property="og:image:secure_url" content="${imageUrl}">
        <meta property="og:image:type" content="image/png"> <!-- Mude para image/jpeg se for .jpg -->
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        
        <meta property="og:url" content="${domain}/api/share">
        <meta property="og:type" content="website">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Molduras HQ">
        <meta name="twitter:description" content="Ajuste suas fotos com molduras exclusivas.">
        <meta name="twitter:image" content="${imageUrl}">

        <!-- Redirecionamento Automático para o usuário -->
        <meta http-equiv="refresh" content="0;url=${domain}/">
    </head>
    <body>
        <p>Carregando o aplicativo...</p>
        <script>
            // Redirecionamento imediato via JavaScript
            window.location.replace("${domain}/");
        </script>
    </body>
    </html>
    `;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
}
