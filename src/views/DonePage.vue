<template>
    <div class="px-4 md:px-8 lg:ml-40 lg:mr-40 py-4 mt-10">
        <div class="h-60 done flex">
            <h2 class="text-white text-5xl md:text-5xl px-4 py-16">Your site is ready</h2>
        </div>

        <div class="mt-12">
            <h2 class="text-2xl font-medium">Your next steps:</h2>

            <div class="wysiwyg regular mt-4">
                <ul>
                    <li dir="ltr" aria-level="1" class="flex items-center">
                        <p dir="ltr" role="presentation">
                            the website URL will be sent to you via email
                        </p>
                    </li>
                    <li dir="ltr" aria-level="1" class="flex items-center mt-2">
                        <p dir="ltr" role="presentation">
                            remember to create administrator users
                        </p>
                    </li>
                    <li dir="ltr" aria-level="1" class="flex items-center mt-2">
                        <p dir="ltr" role="presentation">
                            you will need to set up your web domain.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style scoped>
.done {
    background-color: #358000;
}

.wysiwyg ul {
        list-style-type: none; 
        padding: 0;
    }

    .wysiwyg li {
        margin-bottom: 8px; 
    }

    .wysiwyg li::before {
        content: '•'; 
        color: orange; 
        display: inline-block;
        width: 1em; 
        margin-right: 8px; 
        vertical-align: middle; 
    }
</style>
