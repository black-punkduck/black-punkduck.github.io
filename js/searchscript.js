const searchContainer = document.querySelector('[search-results-container]');
import data from '/json/tags.json' with { type: 'json' };

function searchJSON(elem) {
    // Clear previous results before starting a new search
    searchContainer.innerHTML = ''; 
    
    const selem = elem.toLowerCase();
    if (selem.length < 2) return;

    const results = [];

    for (const [key, value] of Object.entries(data)) {
        const lkey = key.toLowerCase();
        
        if (lkey.includes(selem)) {
            for (const line of value) {
                if (!results.includes(line.h)) {
                    results.push(line.h);

                    let entryDiv = document.createElement('div');
                    entryDiv.style.display = "flex";
                    entryDiv.style.flexDirection = "column";
                    entryDiv.style.marginBottom = "20px";
                    entryDiv.style.color = "#ffffff";

                    let tagWrapper = document.createElement('div');
                    tagWrapper.style.fontSize = "0.85em";
                    tagWrapper.style.marginBottom = "4px";

                    for (const [tag, tagValues] of Object.entries(data)) {
                        if (tagValues.some(item => item.h === line.h)) {
                            // Changed span to a clickable link
                            let tagLink = document.createElement('a');
                            tagLink.textContent = `#${tag}`;
                            tagLink.href = `?q=${tag}`; // Reloads page with the tag as search term
                            tagLink.style.marginRight = "10px";
                            tagLink.style.color = "#ffffff";
                            tagLink.style.opacity = "0.7";
                            tagLink.style.textDecoration = "none";
                            
                            // Simple hover effect for tags
                            tagLink.onmouseover = () => tagLink.style.opacity = "1";
                            tagLink.onmouseout = () => tagLink.style.opacity = "0.7";
                            
                            tagWrapper.appendChild(tagLink);
                        }
                    }
                    entryDiv.appendChild(tagWrapper);

                    let a = document.createElement('a');
                    a.textContent = line.h;
                    a.href = '/' + line.l;
                    a.style.fontWeight = "bold";
                    a.style.color = "#ffffff";
                    a.style.textDecoration = "underline";
                    entryDiv.appendChild(a);

                    searchContainer.appendChild(entryDiv);
                }
            }
        }
    }

    if (results.length === 0) {
        let noResults = document.createElement('p');
        noResults.textContent = "No results found.";
        noResults.style.color = "#ffffff";
        searchContainer.appendChild(noResults);
    }
}

let url_string = window.location.href;
let url = new URL(url_string);
let c = url.searchParams.get('q');
if (c) searchJSON(c);
