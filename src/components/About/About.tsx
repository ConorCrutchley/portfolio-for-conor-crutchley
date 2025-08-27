import Profile from '@/components/About/Profile';

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div>
        <div>
          <p>
            I am a hardworking front-end developer with over 10 years experience
            creating web applications that not only look good, but also load
            quickly, are accessible, and are developed with SEO in mind.
          </p>
          <p>
            I&apos;ve developed this portfolio to showcase some of the
            achievements I have made over the years so feel free to have a look
            around and reach out if my work catches your eye.
          </p>
          <p>
            I&apos;m currently looking for a new position so feel free to reach
            out and we can discuss any opportunities in which I may be of
            service.
          </p>
        </div>
        <div>
          <Profile />
          <button>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
