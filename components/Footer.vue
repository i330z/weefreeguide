<template>
    <div class="footer">
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <ul>
                            <li>
                                <n-link to="/privacy-policy">
                                    Privacy
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/disclaimer">
                                    Disclaimer
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/terms-and-conditions">
                                    Terms And Conditions
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/dmca">
                                    DMCA
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/about-us">
                                    About Us
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/contact">
                                    Contact
                                </n-link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        @copyright WeeFreeGuide 2021
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