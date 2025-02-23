


//export const ImageUpload = () => {
    // const classes = useStyles();
    // const [selectedFile, setSelectedFile] = useState();
    // const [preview, setPreview] = useState();
    // const [data, setData] = useState();
    // const [image, setImage] = useState(false);
    // const [isLoading, setIsloading] = useState(false);
    // let confidence = 0;
async function uploadimage ()
{
    
}
    const sendFile = async () => {
        if (image){
          let formData = new FormData();
          formData.append("file", selectedFile);
          let res = await axios({
            method: "POST", 

            url: "http://127.0.0.1:5500/predict",
           // url: process.env.example.REACT_APP_API_URL,
            data: formData,
          })
          if (res.status === 200){
            // setData(res.data);
          }
        //   setIsloading(false);
        }
      }
      sendFile();
      fetch("http://127.0.0.1:800/predict",{
        method:'POST',
        mode:" ",
        credentials:"include",
        headers:{" Content-Type":
        "application/json",
      },
      body:JSON.stringify(data),

    
    });
    return response.json();

     async function predict()
     {
        let response= await fetch("http://127.0.0.1:800/predict")
        const con = await response.json();
        console.log(con);
     }
     async function uploadMultiple(formData){
        try{
            const response =await fetch("http://127.0.0.1:800/predict",
            {
                method:"POST",
                body:formData
            });
            const result = await responce.json();
            console.log("success : ",result);
        }
        catch(error){
            console.log("error : ",error);
        }
        const photos=document.querySelector('input[type="file"][multiple]'); 
        const formData=new FormData();

        formData.append("title","My vegas Vacation");
 for (const[i,photo] of Array.form(photos.file).entries()){
    form.Data.append(`photos_${i}`,photo);
 }
     }
     uploadMultiple(formData);
// const create = async (image)=>{
// let option={
//     method:"post",
//     headers:{
//        "Authorization":"b944f209-b152-4a05-9d13-b42194c403db"
//     },
//  body:JSON.stringify({

//  })
// }
// console.log(option)
// let p=await fetch("//url")
// let response= await p.json()
// return response;
// }
// let footer= document.querySelector(".footer");
// let disease =document.createElement("h1");
// disease.innerText="//given by model";
// footer.appendChild("disease");

// endpoint= "http://13.48.136.54:8000/api/api-code/"
// headers = {"Authorization": "b944f209-b152-4a05-9d13-b42194c403db"}
// print(requests.post(endpoint, headers=headers).json())