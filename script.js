async function starter() {
  const api = await fetch("https://api.catboys.com/img/random");
  const data = await api.json();
  console.log(data);
  return data;
}

// starter();

async function displayData() {
  const dataList = await starter();
  document.getElementById("catboy").innerHTML = `
    ${dataList.map((catboy) => {
      return `
               <div class="catbay-img">
                   <div class="catboy-img">
                     <img src="${catboy.url}" alt="" />
                   </div>
                   <div class="catboy-details">
                       <table>
                           <tr>
                           <th>category:</th>
                           <td></td>
                           </tr>
                           <tr>
                           <th>artist:</th>
                           <td></td>
                           </tr>
                           <tr>
                           <th>artist_url:</th>
                           <td></td>
                           </tr>
                           <tr>
                           <th>source_url:</th>
                           <td></td>
                           </tr>
                       </table>
                   </div>
               </div>
            `;
    })}
  
  `;
}

displayData();
