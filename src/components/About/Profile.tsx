import profileImg from '@/assets/conor-crutchley-in-salmon-blazer-and-pink-shirt-with-green-gradient.webp';
import styles from '@/styles/about/profile.module.css';

const Profile = () => {
  return (
    <div className={styles['profile']}>
      <img
        src={profileImg}
        alt="conor crutchley in salmon blazer and pink shirt with green gradient"
        width={410}
        // height={461}
      />
    </div>
  );
};

export default Profile;
