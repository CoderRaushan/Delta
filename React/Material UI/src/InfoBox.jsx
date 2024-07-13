
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// cold icon
import AcUnitIcon from '@mui/icons-material/AcUnit';
//sun icon
import WbSunnyIcon from '@mui/icons-material/WbSunny';
//cold icon
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) 
{    
    
    
    const cold_url="https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const rain_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVC5F7wlLCPEroJYlRr2_jgQ1cqn0PDD7EQ&s";
    const hot_url="data:image/jpeg;base64,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";
    
    // const imageUrl="https://media.istockphoto.com/id/1132420263/photo/close-up-of-golden-sand.jpg?s=2048x2048&w=is&k=20&c=pLvjrAr4t4DH04l2foXV92P5aYATm8z4sz5ydm2_Tng=";
    return (
        <div>
        <h2 style={{marginTop:"-1rem"}}>Weather Information: <br />{info.city.charAt(0).toUpperCase() + info.city.slice(1).toLowerCase()}</h2>
            <Card sx={{ maxWidth:400 ,maxHeight:400}}>
                <CardMedia
                    sx={{ height:140 }}
                    image={info.humidity>80?rain_url:info.temp<25?cold_url:hot_url}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     {info.city }
                     &nbsp; {info.humidity>80?<ThunderstormIcon/>:info.temp<25?<AcUnitIcon/>:<WbSunnyIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.primary" component={"span"}>
                        <div style={{
                            display:"flex",alignItems:"center",
                            justifyContent:"space-between",gap:"1rem",fontWeight:"bolder"
                        }}>
                        <p>Temperature:{info.temp}&deg;C</p>
                        <p>Humidity:{info.humidity}%</p>
                        </div>
                        
                        <div style={{
                            display:"flex",alignItems:"center",
                            justifyContent:"space-between",gap:"1rem",fontWeight:"bolder"
                        }}>
                        <p>Maximum Temp:{info.temp_max}&deg;C</p>
                        <p>Minimum Temp:{info.temp_min}&deg;C</p>
                        </div>
                        
                        <p style={{fontWeight:"bolder"}}>Weather:{info.weather}</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}



