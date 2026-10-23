
const NoteCard = ({notes , deleteNote,upDateData}) => {

    
   
    return (
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h1 className="text-black text-xl font-bold uppercase">{notes.title}</h1>
            <h2 className="text-black">{notes.description}</h2>


            <div className="p-2 w-full flex justify-around">
                <button className="bg-red-500 text-white rounded cursor-pointer px-2 py-1 "
                onClick={()=>{deleteNote(notes._id)}}
                >Delete</button>
                <button className="bg-green-400 text-white rounded cursor-pointer px-2 py-1"

                 onClick={()=>{upDateData(notes) }}>Update </button>
            </div>
           
            
        </div>
    );
};

export default NoteCard;


