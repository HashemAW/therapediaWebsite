import Image from "next/image";

const data =  
    [
    {
        title: 'Pediatric Physiotherapy',
        description:"Pediatric physical therapists (PTs) have expertise in movement, motor development, and body function (strength and endurance) that they utilize to help their patients maximize physical function and participation in theilfiome, school, and community environments.", 
        color:"red",
        id:'program_1',
       
        metadata: {
            graph: {
                label: "PT",
                bgColor: "red-01",
                color: "white",
                children: [
                    {label:"Bobath / NDT Adult",  bgColor:"red-02",  color:"black"},
                    {label:"Bobath / NDT Child",  bgColor:"red-03",  color:"black"},
                    {label:"Therasuit",  bgColor:"red-04",  color:"white"},
                    {label:"Technology-based rehabilitation (Video, Hippo-therapy, Robotic Reh)",  bgColor:"red-04",  color:"white"},
                ]
            },
            decoration:(
            <div className="hidden lg:absolute  lg:right-[0px] lg:bottom-[0px] lg:flex flex-col justify-center items-end  z-10 w-[100px] ">
                <Image
                src="/images/stars/stars-05.svg"
                alt=""
                width={100}
                height={100} 
                className='w-[100px] h-auto object-contain '
                />
            </div>)
        }
        
        
    },
    {
        title: 'Pediatric Occupational Therapy', 
        description:"Pediatric occupational therapists (OTs) work to optimize a child's functional independence in activities of daily living including self-care, education, and play. Pediatric occupational therapists develop an individualized plan of care after a thorough assessment of the child's development across several domains (motor, visual processing, executive functioning, and sensory processing skills), taking into account the physical environment and social network", 
        color:"purple",
        id:'program_2',
 
        metadata: {
            direction:'reverse',

            graph: {
                label: "OT",
                bgColor: "purple-01",
                color: "white",
                children: [
                    {label:"OT",  bgColor:"purple-02",  color:"black"},
                    {label:"Hand Therapy",  bgColor:"purple-03",  color:"black"},
                    {label:"SIT",  bgColor:"purple-04",  color:"white"},
                    {label:"Visual / Light Therapy",  bgColor:"purple-05",  color:"white"},
                ]
            }
        }
        
    },
    {
        image:"/images/masked/1-03.png" ,

        title: 'Pediatric Speech Therapy', 
        description:"Pediatric speech language pathologists (SLPs) assess, diagnose, and treat disorders of expressive and receptive language, articulation and phonology, motor speech, voice, fluency, and social and play skills resulting from developmental delays or associated disorders. Speech language pathologists also assist in Feedurg disorders or dysphagia. Augmentative and alternative communication looks at using no tech to high tech communication modalities to help facilitate speech and language skills in children with significant communication delays.", 
        color:"orange",
        id:'program_3'
    },
    {
        title: 'Behavior Therapy', 
        description:"Behavior therapy teaches chiren and their families how to strengthen positive child behaviors and eliminate or reduce unwanted or problem behaviors. One type is parent training in behavior management. The therapist works with parents to learn or improve skills to manage their child's behavior.", 
        color:"green-dark",
       
        id:'program_4'
    },
    {
        title: 'Early Intervention Programme', 
        description:"The Early Intervention Programme is a specialized comprehensive intervention program that supports infants, toddlers and young children with developmental delays, academic and behavioral difficulties.The program includes kids from birth to", 
        color:"pink",
        id:'program_5',
        metadata: {
            direction:'reverse',
            decoration:(
                <div className="hidden lg:absolute  -top-[60px] -left-[370px] lg:flex flex-col justify-center items-start  z-10 w-fit ">
                <Image
                    src="/images/grey boy-01-cropped.svg"
                    alt=""
                    width={400}
                    height={400} 
                    className='-scale-x-100 object-cover  w-[200px] h-auto lg:w-[370px] object-right-top  '
                />
              </div>)
        }
    },
    {
        image:"/images/masked/1-04.png" ,  

        subtitle:'Aqua Therapy & Baby Spa',
        description:"Hydrotherapy is a method of treating diseases and Functional losses by taking advantage of the physical properties of water. Water is one of the oldest methods used for physical therapy. The heat and hydrostatic properties of the water are utilized.", 
        color:"blue",
        metadata: {
            direction:'reverse'
        },
        id:'program_6'
    },
    {
        image:"/images/masked/1-05.png" ,  

        title: 'Therasuit/Therapy Cage', 
        description:"Spider therapy is an intense physiotherapy where the child is suspended at the centre of the exercise unit. This exercise unit is supported by bungee cords and belts to provide proper posture to the child. Children can stand without the help of the therapist, and this exercise unit facilitates balance and also allows freedom of movement. Each bungee cord is of different elasticity.", 
        color:"red",
        id:'program_7',
        metadata: {
            decoration:(
            <div className="hidden lg:absolute  lg:-right-[90px] lg:bottom-[50px] lg:flex flex-col justify-center items-end  z-10 w-[200px] ">
                <Image
                src="/images/stars/stars-08.svg"
                alt=""
                width={200}
                height={0} 
                className='w-[200px] h-auto object-contain '
                />
            </div>)
            
        }
    },
    {
        image:"/images/masked/1-06.png" ,  

        title: 'Intensive Therapy', 
        description:"The 3-week Intensive Therapy Program is divided into Five daily sessions every week. The session can last for 2 to 6 hours per day depending on the age, needs, condition, strengths and weaknesses of the child. A major portion of this time is devoted to preparing the child for the exercises or tasks. This unique and offoctive method helps in improving the balance, Functional skills, improves stamina, and strengthens the muscles so that the child becomes capable of doing the basic body movements like standing, sitting, kneeling, walking, etc., with less assistance and support", 
        color:"orange",
        metadata: {
            direction:'reverse'
        },
        id:'program_9'
    },
    {
        image:"/images/masked/1-07.png" ,  

        title: 'Gait Analysis', 
        subtitle: 'Sensory Integration Therapy', 
        description:"Sensory integration therapy is used to help children learn to use all their senses together - that is, touch, smell, taste, sight and hearing. It's claimed that this therapy can improve challenging behaviour or repetitive behaviour. These behaviours can be related to difficulties with processing sensory information.", 
        color:"green-dark",
        id:'program_10'
        
    },
    {
        image:"/images/masked/1-08.png" ,  

        title: 'School Support Program', 
        description:"The aim of this program is to academically support all cases that need rehabilitation, especially those who attend school and have learning difficulties. At the same time, it aims to provide support equipment and session support that will facilitate the daily life, especially the session, of the cases who attend school and need physical therapy. The cases included in this program consist of individuals who have adapted to daily life roughly like their peers but need support in specific areas.", 
        color:"pink",
        metadata: {
            direction:'reverse'
        },
        id:'program_11'
    },
    {
        title: 'Pediatric Adaptive', 
        subtitle:'Seating and Mobility Clinic',
        description:"Our seating and mobility specialists can help your child who has any of the Following conditions:",
        metadata: {
            list: [
                "Head trauma",
                "Cerebral Palsy",
                "Head trauma.",
                "Cerebral palsy.",
                "Spinal cord injury.",
                "Postural dysfunction.",
                "Neurologicc/conditions.",
                "Conditions that challenge sitting, standing, walking or moving around.",
                "Muscular dystrophy, spinal muscular atrophy, and other neuromuscular.",
            ],
            direction:'reverse'

        } ,
        color:"purple",
        id:'program_8',
    },

];






export default data;


