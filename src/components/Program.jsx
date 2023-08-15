import React from 'react';
import {Box, Container, Heading, Text} from "@chakra-ui/react";
const Program = () => {
  return (
    <Box>
      <Container  centerContent maxW={'container.lg'}>
      <Heading _hover={{
        color: "white",
        }} bgColor={'ActiveBorder'} p={'5'} fontSize={[20,32]}>
        Personal training program
      </Heading>      
      <Text textAlign={'center'} bgColor={'Background'} p={'10'} marginY={['10','20']} letterSpacing={'wider'} lineHeight={['','tall']} fontFamily={'cursive'} fontSize={[16,20]}>The Gold’s Gym Fitness Institute GGFI is India’s first International Fitness Management Institute that offers Fitness Training Program. It offers certificate courses in Fitness Management, Personal Training and Spinning Instructing. It covers a range of subjects to comprehensively address and ensure the best international brand practices in India. The 3 month courses are monitored by qualified personnel of Gold’s Gym, and also hosts guest lectures by the biggest names in the international fitness training industry with guaranteed internships and a firsthand opportunity to experience fitness training from the world leaders in it. The GGFI offers the most exciting and up-to-date education pathway to gain industry leading qualifications as well as ongoing training in all aspects of the fitness industry.</Text>
      <Heading _hover={{
        color: "white",
        }} bgColor={'ActiveBorder'} p={'5'} fontSize={[20,32]}>
        Quick Result Program
      </Heading>      
      <Text textAlign={'center'} bgColor={'Background'} p={'10'} marginY={['10','20']} letterSpacing={'wider'} lineHeight={['','tall']} fontFamily={'cursive'} fontSize={[16,20]}>It Involves Mainly Weight Bearing Activities Targeted At Core Muscles Of The Abdomen And Lower Back. Functional Training Attempts To Adapt Or Develop Exercises Which Allow Individuals To Perform The Activities Of Daily Life More Easily And Without Injuries

India Has Reached The Rampant Proportions Of Obesity And People Are Determined To Find Out how to lose weight?

Due To Many Reasons Like Sedentary Lifestyle, Reduced Energy Expenditure, Unhealthy Eating Habits, High Stress Levels Etc. Bmi And Body Fat Levels Are Increasing Day By Day Which Is Causing Obesity. And Obesity Further Leads To Medical Conditions Like High Cholesterol, High Blood Pressure, Heart Diseases, Stroke, Diabetes, Pcod, Hypothyroidism, Gall Stones, Depression, Knee Pain Etc.

Hence Quick Result Program At Golds Gym Helps In Reducing Excess Fat Mass. It Is A Quick Way To Achieve Your Fitness Goals. Weight Loss Program Not Only Make You Lose Weight Fast But Also Gain And Tone Up Your Body With The Help Of Fitness Orientation, Functional Training And Nutritional Counselling. This Program Is A Combination Of Cardio Training, High Intensity Functional Training, Nutritionist’s Support And Blood Tests. Here We Deliver On Time Results By Monitoring Them On Regular Basis.</Text>
      </Container>
    </Box>
  )
}

export default Program