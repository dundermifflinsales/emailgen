const container = document.getElementById('container');
const generateBtn = document.getElementById('generateBtn');
const backBtn = document.getElementById('backBtn');
const toggleDark = document.getElementById('toggleDark');
const tone=document.getElementById('toneSelect').value;

generateBtn.addEventListener('click', () => {
  container.classList.add('two-columns');
});

backBtn.addEventListener('click', () => {
  container.classList.remove('two-columns');
});

toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    toggleDark.textContent = '☀️';
  }
  else {
    toggleDark.textContent = '🌙';
  }
});

const url="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyATnSGBk5mGP3uPezQjmXphNbKcFADq9d8"
async function start()
   {
    const prompt="hello"
    const requestBody= {
        contents: [
          {
            parts: [
              {
                text: prompt 
              }
            ]
          }
        ]
      };
      
    const response= await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
    });

    const data=await response.json();
    const para=document.querySelector("#reply");
    reply.textContent=data.candidates[0].content.parts[0].text;
   }
