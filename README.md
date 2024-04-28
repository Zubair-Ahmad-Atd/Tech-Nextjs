## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website. 


               <!-- SECTION : FONTS  --> 

     . Adding of heroicon/react/24/outline library and using of specific icons 
     . Adding Customs fonts: 
                    adding fonts to whole webpage, appling in layout.ts in body
                    adding fonts to specific components
                    use of heroicon/react/ library 
                    npm i @heroicons/react 
                    import the specific icon name in the specific file 


                     <!-- SECTION IMAGE  -->
    Use of next Image component 
    Why we use next Image component 
                .For Images Optimization 
                   __ Auto Images resizing 
                   __ Support modern  image formats likes webp and avif 
    Two ways to use Image components 
                . using width and height in its Image component
                . use of fill and relative property(more responsive with respective to div size) 

  Q: How we decide the width and height of image with respect to screen size? 


                <!-- SECTION #04 LAYOUT AND PAGES -->

    Routes: 
            Nextjs uses file system routing 
            Create a folder in root directory i.e App directory
            Create a file with page.tsx
            Every folder represent a unique url

    Nested Routes:
            Create Folder within Folder and create a file with name page.tsx
            e.g    App/dashboard/invoices/page.tsx etc

    Seperate UIs: 
            Nextjs has a layout.tsx file in root directory.That layout apply on all the pages rendered in the pages. But in we can also create seperate UI for different routes.
            If we want to create a seperate UI for dashbord pages, create a file with name layout.tsx in 
            dashboard folder and make a seperate layout for that. 
    
    Colocation:
            In Nextjs we can have folders and files other that routes. i.e In our App root folder we create routes e.g dashboard. But in this App folder we can others files like components, fonts etc.     

    Partial Rendering: 
             In the presence of a single layout.tsx file partial rendering is achieved. only the page is updated, not the layout. 

                                  <!-SECTION 05 NAVIGATING B/W PAGES-  -->
    
    Link :
            Link component instead of <a> for more optimization. 
            When <Link> component is used, whole page is not rendered bcoz Nextjs split the code in server side and prefetch and caches it at client side. So no need to rerender the whole page  while linking.

    Active Link: 
            To show the active link we need the url path of page. To get the path we use react hook named {usePathname} from next/navigation. 
            To style the specific element we can use clsx.
            First import clsx from 'clsx'
            Use clsx :  <div className={clsx('tailwindcss class',
            {'bg-blue-100 text-white': pathname === link.href},
            )}></div>
   

                    

