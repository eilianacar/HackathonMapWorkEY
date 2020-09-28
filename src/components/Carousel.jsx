import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import '../css/carousel.css'
/* import foto1 from '../img/foto1.jpg'
import foto2 from '../img/foto2.jpg'
import foto3 from '../img/foto3.jpg'
import foto4 from '../img/foto4.jpg' */

const Carousel = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={4}
                showControls={false}
                showIndicators={false}
                className="z-depth-1"
                slide
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <p className="textSlider" >Texto¿Te gusta viajar por chile?</p>
   {/*                          <img
                                className="fotos"
                                alt="Primary slide"
                                src={foto1}
                            /> */}
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <p className="textSlider">publica tus mejores picadas</p>
{/*                             <img
                                className="fotos"
                                src={foto2}
                                alt="Second slide"
                            /> */}
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <p className="textSlider">conoce a otros viajeros</p>
{/*                             <img
                                className="fotos"
                                src={foto3}
                                alt="Third slide"
                            /> */}
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <p className="textSlider">recorrer chile ya no es una excusa</p>
{/*                             <img
                                className="fotos"
                                src={foto4}
                                alt="4 slide"
                            /> */}
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default Carousel;