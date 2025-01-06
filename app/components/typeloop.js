import Typewriter from 'typewriter-effect';

const TypewriterLoop = () => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        pauseFor: 2500,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('Somos um Bar<span style="color: #f13232;"> Exclusivo</span>')
          .pauseFor(1500)
          .deleteChars(10) // Deleta apenas a parte "Programador"
          .typeString('<span style="color: #33c1ff;"> Por Convite</span>')
          .pauseFor(1500)
          .deleteChars(20) // Deleta apenas a parte "Desenvolvedor"
          .typeString('<span style="color: #75ff33;"> Uma Experiência!</span>')
          .pauseFor(1500)
          .deleteChars(17) // Deleta apenas a parte "DevOps"
          .start();
      }}
      style={{ display: 'inline' }}
    />
  );
};

export default TypewriterLoop;
