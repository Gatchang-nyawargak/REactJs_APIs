import './index.css';
const UserCard = ({image,fullName})=>{
    return(
        <div>
            <img src={image} alt= {`${fullName} profile`}  className='users'/>
            <h2>{fullName}</h2>
        </div>
    );
};
export default UserCard;

