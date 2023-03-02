interface IPerson {
  name: string;
  imageId: string;
}

interface IAvatarProps {
  person: IPerson;
  size: number;
}

function getImageUrl(person: IPerson, size = "s") {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}

const Avatar = (props: IAvatarProps) => {
  const { person: pes } = props;
  console.log(pes);
  return (
    <>
      <img
        className='avatar'
        src={getImageUrl(pes)}
        alt={pes.name}
        width={props.size}
        height={props.size}
      />
      <h2>{pes.name}</h2>
    </>
  );
};

export default Avatar;
