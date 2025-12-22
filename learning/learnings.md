# next.js 

Getting starting with next.js

starting a project of nextjs

command
npx create-next-app@latest

after that select the appropriate packages to work with

the folder structure
.next - all the dependencies are installed and placed here
app - (important file) - all the app content are here
at last some bunch of config files

we will move with the app file now

the page.tsx is the home page file for the entire application

the directories created in the app directory are pages by the help of next.js and the inside the page.tsx files are the 
pages that we are going to see in the browser

# the routing

here the routing can take care by the next.js, we just need to have care look on the directories
unlike react-roter, next.js will take care here

# navigation 

here the navigation we use Link tag from the nextlink package from next.js
if we use a anchor tag, it again relods the entire webpage and all the dependences
if we use the link tag, it doesn't relods the all the dependencies

# csr vs ssr
# csr (Client side rendering)

on client side rendering we have to bundle all our components and send them to the client for rendering
as the app grows the size increasess and difficult to render(resource heavy)
the environment variables are also can be viewed by the client(less secure)
the client side they can't execute the js code so the content is not visible and seo indexing is not possible(no seo)

# ssr (Server side rendering)

the rendering occurs at server side, (resource is less)
secure
seo is possible

# drawback of ssr

the ssr could not be able to listen to the browser events(mouse clicks, drag...)
access browser apis like localstorage
they cannot maintain state or useeffect

these are only available on the client side

#### in real world applications, we use default to ssr components and use client components whenever needed.

