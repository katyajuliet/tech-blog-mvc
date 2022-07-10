var newPostBtn = document.getElementById('new-post');

function newPostSection() {
    var postSection = document.getElementById('create-post');
    postSection.setAttribute('style', 'display: block')
    newPostBtn.setAttribute('style', 'display: none');
}

async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('input[name="post-text"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title, post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.replace('/dashboard');
        newPostBtn.setAttribute('style', 'display: block');
    } else {
        alert(response.statusText);
    }
}
document.getElementById('new-post').addEventListener('click', newPostSection);
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler); 