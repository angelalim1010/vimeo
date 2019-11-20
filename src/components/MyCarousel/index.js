import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from "reactstrap";
import "./MyCarousel.scss";
const items = [
	{
		src: 'https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_UX182_CR0,0,182,268_AL_.jpg',
		altText: 'Hunt for the Wilderpeople',
		caption: 'A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.'
	},
	{
		src: 'https://m.media-amazon.com/images/M/MV5BMTUwMTQ1NDQ2M15BMl5BanBnXkFtZTgwMDU1MTc4NjE@._V1_UY268_CR3,0,182,268_AL_.jpg',
		altText: 'A Decent Man',
		caption: 'Thomas Engel is always anxious to avoid conflict. At any cost. This compulsive striving for harmony, however, proves to be his road to ruin. He will fight for a peaceful solution. Violently, if need be.'
	},
	{
		src: 'https://images.squarespace-cdn.com/content/v1/59e6208ae45a7cbaeb91a7fc/1508866806198-6H806R2SQKYSTGQ11BOI/ke17ZwdGBToddI8pDm48kG6DEqWFQGN86Yy_kIwYHV57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyK04k3j-IK39m3MLCy1OWzJvtn8WJ5C3AsqSwDQDxoEq/image-asset.jpeg',
		altText: 'Vice Versa',
		caption: 'Come along with the Good Company crew as they travel.'
  },
  {
    src: "http://www.gstatic.com/tv/thumb/v22vodart/12392207/p12392207_v_v8_aa.jpg",
    altText: "The Fourth Phase",
    caption: "Experience the world of Red Bull like you have never seen it before. With the best action sports clips on the web and original series, prepare for your stoke factor to be at an all time high."
  }

];
class MyCarousel extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  
  }
  
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : 
      this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : 
      this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
  
      const { activeIndex } = this.state;
      const slides = items.map((item) => {
  
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
  
          <div className='carouselCont'>
            <div className='backgroundImgCont'>
              <img width='100%' src={item.src} alt={item.altText} />
            </div>
            <div className ="ImgCont">
              <img width='100%' src={item.src} alt={item.altText} />
            </div>
           

            <div className='TextCont'>
              <CarouselCaption captionHeader={item.altText}  captionText={item.caption}  />
              <Button>Buy Now</Button>
              <Button>Watch Trailer</Button>
            </div>
           
          </div>
        </CarouselItem>
        );
      });
  
      return (
        <div>
          <Carousel className='trustedMechCarousel' activeIndex={activeIndex} next={this.next} previous={this.previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
      );
    }
  }
  

export default MyCarousel;
