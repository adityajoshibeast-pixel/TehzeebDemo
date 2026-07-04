# Tehzeeb Dastarkhwan — Vercel deploy karne ka tarika

## 1. Groq API key lo
[console.groq.com/keys](https://console.groq.com/keys) pe jao, free key banao.

## 2. Vercel pe deploy karo

**Option A — Vercel CLI se (sabse aasan):**
```bash
npm i -g vercel
cd tehzeeb-dastarkhwan-vercel
vercel
```
Prompts follow karo (project name, etc). Deploy ho jayega ek `.vercel.app` URL pe.

**Option B — GitHub se:**
1. Is folder ko GitHub repo mein push karo
2. [vercel.com/new](https://vercel.com/new) pe jao, repo import karo
3. "Deploy" dabao

## 3. GROQ_API_KEY set karo (zaroori step!)
Deploy hone ke baad:
1. Vercel dashboard → apna project → **Settings → Environment Variables**
2. Naam: `GROQ_API_KEY`, Value: apni Groq key paste karo
3. **Save** karo, phir **Deployments** tab mein jaake latest deployment ko **Redeploy** karo (env var tabhi apply hoga)

Bas — ab jo bhi tumhara `.vercel.app` URL kholega, chatbot bina kisi setup ke kaam karega. Key sirf Vercel ke server pe rahegi, kisi ko dikhegi nahi.

## Local mein test karna ho to
```bash
cp .env.example .env.local
# .env.local mein apni real key daalo
vercel dev
```
`vercel dev` chalane se `/api/chat` bhi local mein kaam karega (plain `index.html` double-click karne se **/api/chat nahi chalega**, kyunki wo serverless function hai — usko chalane ke liye ek server chahiye).
