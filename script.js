// Função para converter markdown em HTML
function markdownToHTML(md) {
    return md
        // Processar cabeçalhos (h1 - h6)
        .replace(/^###### (.*)$/gim, '<h6>$1</h6>')
        .replace(/^##### (.*)$/gim, '<h5>$1</h5>')
        .replace(/^#### (.*)$/gim, '<h4>$1</h4>')
        .replace(/^### (.*)$/gim, '<h3>$1</h3>')
        .replace(/^## (.*)$/gim, '<h2>$1</h2>')
        .replace(/^# (.*)$/gim, '<h1>$1</h1>')
        // Processar texto em negrito e itálico
        .replace(/\*\*([^*]+)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/gim, '<em>$1</em>')
        // Processar imagens com descrição
        .replace(/\!\[([^\]]+)\]\(([^)]+)\)/gim, '<div class="content"><img src="$2" alt="$1"><span class="image-description">$1</span></div>')
        // Processar links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
        // Processar listas não ordenadas
        .replace(/^\- (.*)$/gim, '<li>$1</li>')
        // Quebras de linha
        .replace(/\n/g, '<br>')
        // Processar blocos personalizados
        .replace(/<important>([^<]+)<\/important>/gim, '<div class="quote-card quote-important"><h3>IMPORTANT</h3><p>$1</p></div>')
        .replace(/<note>([^<]+)<\/note>/gim, '<div class="quote-card quote-note"><h3>NOTE</h3><p>$1</p></div>')
        .replace(/<tip>([^<]+)<\/tip>/gim, '<div class="quote-card quote-tip"><h3>TIP</h3><p>$1</p></div>')
        .replace(/<warn>([^<]+)<\/warn>/gim, '<div class="quote-card quote-warning"><h3>WARNING</h3><p>$1</p></div>')
        // Processar blocos de código
        .replace(/```([^`]+)```/gim, '<div class="code-block"><button class="copy-button">Copy</button><pre><code>$1</code></pre></div>');
}

// Função para carregar o post baseado no parâmetro da URL
function loadPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const fileName = urlParams.get('file');

    if (fileName) {
        fetch(`./posts/${fileName}.md`)
            .then(response => {
                if (!response.ok) throw new Error("File not found.");
                return response.text();
            })
            .then(md => {
                const authorInfo = extractAuthorInfo(md);
                const postHTML = markdownToHTML(md.replace(/Info {[^}]+}/, ''));
                const postContainer = document.getElementById('post-content');
                const postDate = getFileDate();

                postContainer.innerHTML = `
                    <article>
                        <h1>${formatTitle(fileName)}</h1>
                        <div class="author-info">
                            <img src="${authorInfo.photo}" alt="${authorInfo.name}">
                            <span>By <a href="${authorInfo.profileUrl}">${authorInfo.name}</a></span>
                        </div>
                        <p class="post-meta">Published on ${postDate}</p>
                        <div>${postHTML}</div>
                    </article>
                `;
                addCopyButtonEventListeners();
            })
            .catch(error => {
                console.error('Error loading post:', error);
                window.location.href = "404.html";
            });
    }
}

// Função para formatar o título
function formatTitle(fileName) {
    return fileName.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

// Função para adicionar eventos aos botões de cópia
function addCopyButtonEventListeners() {
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', function() {
            const code = button.nextElementSibling.textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => button.textContent = 'Copy', 1500);
            }).catch(() => alert('Error copying code'));
        });
    });
}

// Função para extrair informações do autor
function extractAuthorInfo(md) {
    const match = md.match(/Info {\s*AuthorName: ([^\n]+)\s*AuthorUrlProfile: ([^\n]+)\s*AuthorPhoto: ([^\n]+)\s*}/);
    return match ? {
        name: match[1].trim(),
        profileUrl: match[2].trim(),
        photo: match[3].trim()
    } : { name: 'Unknown', profileUrl: '#', photo: 'default.png' };
}

// Função para obter a data do arquivo
function getFileDate() {
    return new Date().toLocaleDateString();
}

// Função de sumarização do texto
function summarizeText(content) {
    const sentences = content.replace(/\n/g, ' ').split(/(?<=\.)\s/);
    return sentences.slice(0, 2).join(' ') + (sentences.length > 2 ? '...' : '');
}

// Evento para botão de sumarização
document.addEventListener('DOMContentLoaded', () => {
    loadPost();
});
