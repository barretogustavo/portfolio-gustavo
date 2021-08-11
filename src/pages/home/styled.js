import styled from 'styled-components'

export const AreaMain = styled.div`

.div_Button_responsive{
    display: flex;
    justify-content: space-between;
    @media (max-width:634px){
        display: block;
    }
}

`;

export const Title = styled.div`
width: 100%;
height: 880px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
z-index: 0;
background-color: black;
color: white;

    
.div_Title{
    width: 500px; /*auto*/
    height: auto;
    margin: 0 50vw 0 18vw; /*0 50vw 0 15vw;*/ 
    
    h1{
        font-weight: bold;
        font-size: 3em;
        margin-bottom: 0;

        &::selection{
            background-color: #e9723d;
        }
    }    
    h2{
        font-size: 1em;
        margin-top:0;
        text-align: left;

        &::selection{
            background-color: #e9723d;
        }
    }
    h3{
        font-weight: normal;
        font-size: 1em;
        margin-top: 50px;
        text-align: left;

        &::selection{
            background-color: #e9723d;
        }
    }
    @media(max-width:599px){
        margin: 0 50vw 0 7vw;

        h1{
            font-size: 1.9em;
            font-weight: bolder;
        }
        h2{
            font-size: .8em;
        }
        h3{
            font-size: .8em;
        }
        }
}
`;

export const Lateral = styled.div`

    background-color: #e9723d;
    width: 46.4vw; /*47.3%; */
    height: 880px;
    float: right;
    position: relative;
    z-index: 1;

    @media (max-width:1622px)
    {
        width:46.8vw;
    }
    @media (max-width:1366px)
    {
        width:46.2vw;
    }
    @media (max-width:1134px)
    {
        width:45.3vw;
    }
    @media (max-width:896px)
    {
        width:44.2vw;
    }
    @media (max-width:746px)
    {
        width:43vw;
    }

`;

export const Button_main = styled.button`
color: #e9723d;
background-color: transparent;
border:3px solid #e9723d ;
border-radius: 15px;
width: 190px;
height: 50px;
margin: 60px 0 0 0; /*60px 50px 0 0; */
font-size: 18px;

    &:hover{
        cursor: pointer;
        background-color: #e9723d;
        color: black;
    }
@media(max-width:1200px){
    width:160px;
}
@media(max-width:1016px){
    width:140px;
    font-size: 13px;
    font-weight: bold;
}
@media(max-width:882px){
    width:120px;
}
@media(max-width:760px){
    width:100px;
}
@media (max-width:634px){
        width: 190px;
        margin-top:15px ;
    }
`;

export const Section = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;

.Section_width{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 1152px;
    height: auto;
}
`;

export const Section_title = styled.h1`
width: 100%;
height: 50px;
margin: 30px 0 50px 0;
text-align: center;
color: #e9723d;
font-size: 30px;

    &::selection{
            background-color: #e9723d;
            color: black;
        }   
`;

export const Projects_content = styled.div`

width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;

#project_style{
    width: 300px;
    height: 350px;
    margin: 10px;
    border: solid 10px #e9723d;
    border-radius: 10px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

        &:hover{
            box-shadow: 0 0 15px #e9723d;
        }
        &:hover #name_project_effect{
            height: 90%;
            transition: .2s;
        }
        &:hover span{
            display: block !important; /*Libera a descrição do projeto*/
        }
        &:hover .Button_about{
            display: block !important;
        }

        img{
            position: absolute;
            z-index: -1;
            width: 285px;
        }

        #name_project_effect{
            width: 100%;
            height: 60px;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            background-color: #e9723d;

            text-align: center;
            padding-top: 20px;
            font-weight: bolder;
            font-size: 20px;

            span{
                display: none;
                font-size: 14px;
                text-align: center;
            }
        }

        .swipe_smartphone{
            position: absolute;
            transform: rotate(-90deg);
            margin-right: 10px;
            color: white;
            display: none;

            @media(max-width:640px){
                display: block;
            }
        }
}
`;

export const Button_about = styled.button`
display:none;
border:none;
border-radius: 15px;
width: 100px;
height: 20px;
margin-top: 20px;
margin-left: 90px;
background-color: black;
color:white;

            &:hover{
                transition: .1s;
                cursor: pointer;
                margin-left: 95px;
                width: 90px;
                height: 18px;   
            }
            a{
                text-decoration: none;
                &:visited{
                    text-decoration: none;
                    color:white;
                }
            }
`;

export const Habilidades = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;
export const Card_skills = styled.div`
width: 265px;
height: 330px;
margin: 10px;
background: linear-gradient(0deg, rgba(233,114,61,1) 80%, rgba(0,0,0,1) 80%);
border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
display: flex;
justify-content: center;
color: white;
            &:hover img{
                transform: rotate(15deg);
                transition: .2s;
                }

            img{
                position: absolute;                
            }
            div{
                margin-top:200px;
                width: 100%;
                height: 100px;
                text-align: center;
            }
            h2{
                font-size: 18px;
                margin-top: 0;
            }
            h1{
                font-size:35px;
                margin-top: 0;
            }
`;

export const Contact = styled.div`

width: 100%;
height: auto;
padding: 5px;
display: flex;
flex-wrap: wrap;

@media (max-width:615px){
            display: flex;
            align-items:center;
            justify-content: center;
        }

    .contact_box{
        width: 100%;
        height: 120px;
        margin-bottom: 80px;
        display: flex;
        align-items: center;

        .back_contact{
            font-size: 70px;
            margin-left: 20px;
            color: transparent;
            opacity: 20%;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #e9723d;
            position: relative;
            z-index: 1;  
            
            @media (max-width:1041px){
            font-size: 55px;
            }
            @media (max-width:835px){
            font-size: 40px;
            }
            @media (max-width:615px){
            display: none;
            }

        }

        .front_contact{
            font-size: 30px;
            color: #e9723d;
            position: absolute;
            z-index: 2;
            margin-left: 180px;

            @media (max-width:1041px){
            font-size: 25px;
            }
            @media (max-width:835px){
            font-size: 20px;
            }
            @media (max-width:615px){
            display: none;
            }
        }
    }

    a{
        text-decoration: none;
                
        &:visited{
            text-decoration: none;
        }
    }

    img{
        width: 100px;
        margin: 10px;

        @media (max-width:1041px){
            width: 90px;
        }
        @media (max-width:835px){
            width: 75px;
        }
        @media (max-width:640px){
            width: 55px;
        }
        @media (max-width:615px){
            width: 100px;
            margin: 30px;
        }
        @media (max-width:495px){
            width: 50px;
            margin: 30px;
        }
    }

    .contact_box:hover .back_contact{
        opacity: 100%;
        transition: .5s;
        cursor: pointer;           
        color: #e9723d;
    }
    .contact_box:hover .front_contact{
        opacity: 0%;
        transition: .1s;
        cursor: pointer;
    }
`;