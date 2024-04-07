import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>My-Closet</h1>
          <p className='text-center mb-4'>
            Template inicial com MERN funcionando para o continuo desenvolvimento do app My Closet!.
          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Logar
            </Button>
            <Button variant='secondary' href='/register'>
              Registrar
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
