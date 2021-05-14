<template>
    <div class="header">
        <nav >
            <div class="d-flex justify-content-between align-items-center" style="height: 100%">
                <div>
                    <n-link to="/">WeeFreeGuide</n-link>
                </div>
                
                    <!-- <ul>
                        <li>
                            Blog
                        </li>
                    </ul> -->
                
            </div>
        </nav>
    </div>
</template>

<style scoped>
.header{
    height: 50px;
    background: var(--primary);
}

nav{
    color: white;
    padding: 0px 25px;
    height: 100%;
    font-size: 20px;
    text-transform: capitalize;
}

li{
    padding-bottom: 0px;
}

a{
    color: white;
}
</style>