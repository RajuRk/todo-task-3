async function starter() {
  const api = await fetch("https://api.catboys.com/img/random");
  const data = await api.json();
  console.log(data);
  return data;
}

// starter();

async function displayData() {
  const catboy = await starter();
  document.getElementById("catboy").innerHTML = `
               <div class="catbay-img">
                   <div class="catboy-img">
                     <img src="${catboy.url}" alt="" />
                   </div>
                   <div class="catboy-details">
                       <table class="table table-striped">
                           <tr>
                           <th scope="col">Category:</th>
                           <td>${catboy.category}</td>
                           </tr>
                           <tr>
                           <th scope="col">Artist:</th>
                           <td>${catboy.artist}</td>
                           </tr>
                           <tr>
                           <th scope="col">Artist Link:</th>
                           <td><a href="${catboy.artist_url}" target="_blank">${catboy.artist_url}</a></td>
                           </tr>
                           <tr>
                           <th scope="col">Source Link:</th>
                           <td><a href="${catboy.source_url}" target="_blank">${catboy.source_url}</a></td>
                           </tr>
                       </table>
                   </div>
               </div>
            `;
}

displayData();
