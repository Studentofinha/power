import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: '',
    image: require('../assets/images/10.DRALON-looped-yarn-700x525.jpg'),
    title: 'PathMade of juna',
    subtitle: 'Learn More'
  },
  {
    id: 2,
    link: '',
    image: require('../assets/images/3.yarn-cooling-touch-moisture-absorbing-and-perspiration-700x524.jpg'),
    title: 'Made of Cotton',
    subtitle: 'Learn More'
  },
  {
    id: 3,
    link: '',
    image: require('../assets/images/yashil.jpg'),
    title: 'Mode of Silk',
    subtitle: 'Learn More'
  },
  {
    id: 4,
    link: '',
    image: require('../assets/images/5.-function-yarn-of-natural-fiber-anti-bacterial-700x526.jpg'),
    title: 'Made of Cotton',
    subtitle: 'Learn More'
  },
  {
    id: 5,
    link: '',
    image: require('../assets/images/7.-WARMPLUS-Acrylicheating-warm-700x525.jpg'),
    title: 'Mode of Silk',
    subtitle: 'Learn More'
  },
  {
    id: 6,
    link: '',
    image: require('../assets/images/AG-polyester-cotton-antibacterial-yarn-700x524.jpg'),
    title: 'Made of Cotton',
    subtitle: 'Learn More'
  },
  {
    id: 7,
    link: '',
    image: require('../assets/images/Dralon-cotton-with-warm-function-700x525.jpg'),
    title: 'Made of Cotton',
    subtitle: 'Learn More'
  },
  {
    id: 8,
    link: '',
    image: require('../assets/images/10.DRALON-looped-yarn-700x525.jpg'),
    title: 'PathMade of juna',
    subtitle: 'Learn More'
  },
  {
    id: 9,
    link: '',
    image: require('../assets/images/yashil.jpg'),
    title: 'Made of Silk',
    subtitle: 'Learn More'
  },
  {
    id: 10,
    link: '',
    image: require('../assets/images/10.DRALON-looped-yarn-700x525.jpg'),
    title: 'PathMade of juna',
    subtitle: 'Learn More'
  },
  {
    id: 11,
    link: '',
    image: require('../assets/images/yashil.jpg'),
    title: 'Made of Silk',
    subtitle: 'Learn More'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our products</h2>
          <div className="subtitle">our awesome products</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;