fetch('/data/links.json')
    .then((reponse) => reponse.json())
    .then((json) => jsonParse(json));

function jsonParse(data) {
    let links = data['links'];

    for (let i = 0; i < links.length; i++) {
        let link = createLinkContainer(links[i]);

        if (links[i]['featured'] == true) {
            document.getElementById('featured-container').append(link);
        } else {
            document.getElementById('socials-container').append(link);
        }

    }
}

function createLinkContainer(link_data) {
    let a = createLink(link_data);
    
    let container = createContainer(link_data);
    a.appendChild(container);

    let img = createIcon(link_data['icon']);
    container.appendChild(img);

    let text = createDisplayText(link_data['display-text'])
    container.appendChild(text);

    return a;

    document.getElementById('link-container').appendChild(a);
}

function createContainer(link_data) {
    let container = document.createElement('div');
    container.classList.add('link');
    container.id = link_data['name'];

    if (link_data["featured"] == true) {
        container.classList.add('featured-link');
        container.classList.add('blur-background');
        container.classList.add(link_data['name'] + '-background')
    }

    return container;
}

function createLink(link_data) {
    let a = document.createElement('a');
    a.href = link_data['url'];
    a.classList.add('url');
    return a;
}

function createIcon(icon_name) {
    let img = document.createElement('img');
    img.classList.add('link-icon');
    img.src = '/icons/' + icon_name;
    return img;
}

function createDisplayText(display_text) {
    let p = document.createElement('p');
    p.classList.add('link-text');
    p.innerHTML = display_text;
    return p;
}