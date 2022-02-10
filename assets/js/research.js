/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Coexistence of DSRC and C-V2X communication: modeling a competing scenario",
        authors : "BR Elbal, M Rupp",
        conferences : "2021 IEEE 32nd Annual International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)",
        researchYr : 2021,
        url_box : "popup1",
        url_adress : "https://ieeexplore.ieee.org/abstract/document/9569555",
        image : "assets/images/research-page/d_802_0.png"
    },
 

    {
        title : "Relay Selection and Coverage Analysis of Relay Assisted V2I Links in Microcellular Urban Networks",
        authors : "Blanca Ramos Elbal, Stefan Schwarz, Markus Rupp",
        conferences : "2020 IEEE Wireless Communications and Networking Conference (WCNC)",
        researchYr : 2020,
        url_box : "popup2",
        url_adress : "https://ieeexplore.ieee.org/abstract/document/9120458",
        image : "assets/images/research-page/pop2_0.gif"
    },

    {
        title : "Coverage Analysis of Relay Assisted V2I Communication in Microcellular Urban Networks",
        authors : "Blanca Ramos Elbal, Martin Klaus Müller, Stefan Schwarz, Markus Rupp",
        conferences : "27th European Signal Processing Conference (EUSIPCO)",
        researchYr : 2019,
        url_box : "popup3",
        url_adress : "https://ieeexplore.ieee.org/abstract/document/8902579",
        image : "assets/images/research-page/pop3.gif"
    },

    {
        title : "Flexible multi-node simulation of cellular mobile communications: the Vienna 5G System Level Simulator",
        authors : "Martin Klaus Müller, Fjolla Ademaj, Thomas Dittrich, Agnes Fastenbauer, Blanca Ramos Elbal, Armand Nabavi, Lukas Nagel, Stefan Schwarz, Markus Rupp",
        conferences : "EURASIP Journal on Wireless Communications and Networking",
        researchYr : 2018,
        url_box : "popup4",
        url_adress : "https://jwcn-eurasipjournals.springeropen.com/articles/10.1186/s13638-018-1238-7",
        image : "assets/images/research-page/pop4_1.webp"
    },

    {
        title : "The Impact of Carrier Frequency at 800 MHz and 3.5 GHz in Urban and Rural Environments Using Large Antenna Arrays",
        authors : "Blanca Ramos Elbal, Fjolla Ademaj, Stefan Schwarz, Markus Rupp",
        conferences : "26th Telecommunications Forum (TELFOR)",
        researchYr : 2018,
        url_box : "popup5",
        url_adress : "https://ieeexplore.ieee.org/abstract/document/8612135",
        image : "assets/images/research-page/pop5.gif"
    },

    {
        title : "Dependable wireless connectivity: insights and methods for 5G and beyond",
        authors : "Stefan Schwarz, Blanca Ramos Elbal, Erich Zöchmann, Ljiljana Marijanovic, Stefan Pratschner",
        conferences : "e & i Elektrotechnik und Informationstechnik",
        researchYr : 2018,
        url_box : "popup6",
        url_adress : "https://link.springer.com/article/10.1007/s00502-018-0646-z",
        image : "assets/images/research-page/pop6.webp"
    },

    {
        title : "Coverage-improvement of V2I communication through car-relays in microcellular urban networks",
        authors : "Blanca Ramos Elbal, Martin Klaus Müller, Stefan Schwarz, Markus Rupp",
        conferences : "26th European Signal Processing Conference (EUSIPCO)",
        researchYr : 2018,
        url_box : "popup7",
        url_adress : "https://ieeexplore.ieee.org/abstract/document/8553216",
        image : "assets/images/research-page/pop7.gif"
    },

    {
        title : "Evaluating the throughput performance at 2 GHz and 3.5 GHz in a massive MIMO system",
        authors : "Blanca Ramos Elbal, Fjolla Ademaj, Stefan Schwarz, Markus Rupp",
        conferences : "21th International ITG Workshop on Smart Antennas",
        researchYr : 2017,
        url_box : "popup8",
        url_adress : "https://ieeexplore.ieee.org/abstract/document/7955955",
        image : "assets/images/research-page/setup.svg"
    },

    {
        title : "A flexible setup to determine RFID tag requirements for multiple-response scenarios",
        authors : "Martin Mayer, Blanca Ramos Elbal, Wolfgang Gartner, Robert Langwieser, Jelena Kaitovic",
        conferences : "IEEE International Conference on RFID (RFID)",
        researchYr : 2016,
        url_box : "popup9",
        url_adress : "https://ieeexplore.ieee.org/abstract/document/7488024",
        image : "assets/images/research-page/pop9.gif"
    }


];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, url_adress, url_box}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--LINK BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${url_box}" aria-expanded="false" aria-controls="${url_box}">
                          <a href=${url_adress} target="_blank">LINK</a>
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                    </div>
            
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

