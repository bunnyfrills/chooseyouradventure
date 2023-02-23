window.onload = function () {
  //first panel click, to add img changes

  document.getElementById('panel1').addEventListener("click", function () {
    document.getElementById('popUpDiv').style.display = "block";

    setTimeout(() => {
      document.getElementById('popUpDiv').style.display = "none";
    }, 1770);

  });


  //third panel click popup

  document.getElementById('panel3').addEventListener("click", function () {
    document.getElementById('popUpDiv').style.display = "block";
    setTimeout(() => {
      document.getElementById('popUpDiv').style.display = "none";
    }, 1770);
  });


  //image changes below

  // Get the image elements
  const image1 = document.getElementById('panel1');
  const image2 = document.getElementById('panel2');
  const image3 = document.getElementById('panel3');

  // Add event listeners to each image
  panel1.addEventListener('click', () => {
    panel1.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429049531158578/panel3badpost.jpg?width=559&height=559';
    panel2.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429024449220628/panel2badpost.jpg?width=559&height=559';
    panel3.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429049531158578/panel3badpost.jpg?width=559&height=559';
  });

  panel2.addEventListener('click', () => {
    panel1.src = 'https://media.discordapp.net/attachments/411355060878966784/1078428991091908708/panel1goodpost.jpg?width=559&height=559';
    panel2.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429024709259264/panel2goodpost.jpg?width=559&height=559';
    panel3.src = 'https://media.discordapp.net/attachments/411355060878966784/1078428991091908708/panel1goodpost.jpg?width=559&height=559';
  });

  panel3.addEventListener('click', () => {
    panel1.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429049531158578/panel3badpost.jpg?width=559&height=559';
    panel2.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429024449220628/panel2badpost.jpg?width=559&height=559';
    panel3.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429049531158578/panel3badpost.jpg?width=559&height=559';
  });

// make imagees unclickable 

panel1.addEventListener('click', () => {
  panel1.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429049531158578/panel3badpost.jpg?width=559&height=559';
  panel2.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429024449220628/panel2badpost.jpg?width=559&height=559';
  panel3.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429049531158578/panel3badpost.jpg?width=559&height=559';
  disablepanels();
});

panel2.addEventListener('click', () => {
  panel1.src = 'https://media.discordapp.net/attachments/411355060878966784/1078428991091908708/panel1goodpost.jpg?width=559&height=559';
  panel2.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429024709259264/panel2goodpost.jpg?width=559&height=559';
  panel3.src = 'https://media.discordapp.net/attachments/411355060878966784/1078428991091908708/panel1goodpost.jpg?width=559&height=559';
  disablepanels();
});

panel3.addEventListener('click', () => {
  panel1.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429049531158578/panel3badpost.jpg?width=559&height=559';
  panel2.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429024449220628/panel2badpost.jpg?width=559&height=559';
  panel3.src = 'https://media.discordapp.net/attachments/411355060878966784/1078429049531158578/panel3badpost.jpg?width=559&height=559';
  disablepanels();
});

function disablepanels() {
  panel1.classList.add('clicked');
  panel2.classList.add('clicked');
  panel3.classList.add('clicked');
}
  
};

