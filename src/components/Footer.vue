<template>
    <footer id="custom-footer">
        <div class="sub-footer">
            <div class="container">
                <!-- <div class="row logo">
                    <div class="col-sm text-center">
                        <router-link to="/" class="footer-logo">
                            <img
                                alt="University of Cincinnati Foundation"
                                src="https://foundation.uc.edu/image/css/logo-ucFoundation.png"
                            >
                        </router-link>
                    </div>
                </div>-->
                <div class="row info">
                    <div class="col-sm text-left">
                        <h4>Contact</h4>
                        <p>The University of Cincinnati Foundation</p>
                        <p>PO Box 19970 | Cincinnati, OH 45219</p>
                        <p>513-556-6781 | 888-556-8889</p>
                        <p>513-556-4300 (fax) | ucfoundation@uc.edu</p>
                    </div>
                    <div class="col-sm text-left">
                        <h4>Connect</h4>
                        <p>
                            <span class="fab fa-facebook-square">Facebook</span>
                        </p>
                        <p>
                            <span class="fab fa-linkedin">LinkedIn</span>
                        </p>
                        <p>
                            <span class="fab fa-twitter-square">Twitter</span>
                        </p>
                        <p>
                            <a href="https://foundation.uc.edu">UC Foundation</a>
                        </p>
                        <p>
                            <a href="https://alumni.uc.edu">UC Alumni Association</a>
                        </p>
                    </div>
                    <div class="col-sm text-left">
                        <h4>Questions</h4>
                        <p>
                            <font-awesome-icon icon="phone"/>
                            <a
                                data-v-236132e6
                                href="tel:513-558-6903"
                                aria-hidden="true"
                            >513-558-6903</a>
                        </p>
                        <p>
                            <font-awesome-icon icon="envelope"/>
                            <a
                                data-v-236132e6
                                href="mailto:ucgnistaff@uc.edu"
                                aria-hidden="true"
                            >uc@uc.edu</a>
                        </p>
                    </div>
                </div>
                <div class="row copyright">
                    <div class="col-md">
                        <p
                            class="text-center"
                        >Copyright Information | &copy; 2019 University of Cincinnati Foundation</p>
                    </div>
                    <div class="col-md">
                        <p class="text-center">
                            <a href="https://www.alumni.uc.edu/privacy">privacy policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";

footer {
    /* border-top: 5px solid $red; */
    margin-top: 50px;
    position: relative;
    &#custom-footer {
        position: relative;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        .sub-footer {
            display: block;
            width: 100%;
            padding-bottom: 80px;
            background: rgba($black, 0.85);
            position: relative;
            p {
                margin-bottom: 0;
                font-size: 0.9em;
            }
            a {
                text-decoration: underline;
            }
            .logo {
                padding: 0.5rem 0;
                img {
                    margin: 0 auto;
                }
            }
            .info {
                padding: 1rem 0;
                color: #666;
                span {
                    display: block;
                    line-height: 1.25em;
                    &:before {
                        font-family: "Font Awesome 5 Brands";
                        margin-right: 10px;
                    }
                }
            }
            .copyright {
                padding: 15px 0;
                margin: 0;
                color: $white;
                background: #212121;
                position: absolute;
                bottom: 20px;
                left: 0;
                right: 0;
                z-index: 20;
                a {
                    color: $red;
                }
            }
        }
        .footer-logo {
            img {
                display: block;
                width: 350px;
            }
        }
        svg {
            margin: 0 5px;
            path {
                fill: $red;
            }
        }
    }
}
</style>
