// import { Image, Label, Title } from '@mui/icons-material';
import styled from "styled-components";
import { Container, Input } from '@mui/material'
import React from 'react'
import AuthImage from "../utils/Images/AuthImage.jpg";
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Contact = () => {
  return (
    <Container style={{display:'flex',flexDirection:'row',padding:'20px',margin:'30px auto',boxShadow:'10px 10px 5px #aaaaaa',borderRadius:'25px'}}>
        {/* <Title>Contact Us</Title> */}
        <Container style={{display:'flex',alignItems:'center',margin:'20px',maxWidth:'80%'}}>
            
            <form>
                <label style={{fontWeight:'bold'}}>Name</label><br/>
                <input placeholder='Enter Your Name' 
                    style={{
                        width:'350px',
                        padding:'4px 10px',
                        margin:'5px',
                        fontSize:'16px',
                        outline:'none',
                        borderRadius:'20px'
                        }}
                    /><br/><br/>

                <label style={{fontWeight:'bold'}}>Email</label><br/>
                <input placeholder='Enter Your e-mail'
                    style={{
                        width:'350px',
                        padding:'4px 10px',
                        margin:'5px',
                        fontSize:'16px',
                        outline:'none',
                        borderRadius:'20px'
                        }}
                /><br/><br/>

                <label style={{fontWeight:'bold'}}>Phone</label><br/>
                <input placeholder='Enter Your Phone Number'
                    style={{
                        width:'350px',
                        padding:'4px 10px',
                        margin:'5px',
                        fontSize:'16px',
                        outline:'none',
                        borderRadius:'20px'
                        }}
                /><br/><br/>

                <textarea placeholder='Enter Your Query' rows={4} style={{width:'370px'}}/><br/><br/>
                <button type='submit' style={{width:'150px',padding:'6px 8px',backgroundColor:'Orange',color:'white',outline:'none',border:'none',borderRadius:'20px',fontSize:'20px'}}>Submit Query</button>
            </form>
        </Container>
        <Container >
            <Image src={AuthImage}  style={{borderRadius:'0px 25px 25px 0px'}}/>
        </Container>    
    </Container>
  )
}

export default Contact