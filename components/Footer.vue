<template>
    <div class="footer">
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <ul>
                            <li>
                                <n-link to="/">
                                    Privacy
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/">
                                    Disclaimer
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/">
                                    Copyright Policy
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/">
                                    About Us
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/">
                                    Contact
                                </n-link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        @copyright Blogger 2021
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.footer{
    padding: 20px 15px;
    background: var(--primary);
    font-size: 22px;
    color: white;
}

li{
    display: inline-block;
    margin-right: 20px;
}

a{
    color: white;
}
</style>