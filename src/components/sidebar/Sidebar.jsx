import { Add } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <Add />
        <p>Create Space</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg="
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1256603011/photo/business-network-concept-customer-support-shaking-hands.jpg?s=612x612&w=0&k=20&c=uRYJ6c2EyNO92w0wQlCScEVwbdoyHaXzfIxw1q7zNLA="
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/psychology-therapy-help-office-psychologist-psychiatry-female-therapist-advice-psychotherapy-professional-animated-word-psychology-139611324.jpg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/vegetables-spices-ingredient-cooking-italian-food-black-wooden-old-board-rustic-style-76334485.jpg"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.shutterstock.com/image-illustration/3d-illustration-musical-notes-signs-260nw-761313844.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/ai-machine-learning-hands-robot-human-touching-big-data-network-connection-background-science-artificial-intelligence-172987598.jpg"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/good-health-word-cloud-hand-marker-concept-white-background-184068166.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgVEhUYFRgVGBIYGhgYGBUYGBgRGBgZGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ+QDs1Py40NjEBDAwMEA8QHhISHjQrJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAEAQAAIBAgQDBgMFBgQGAwAAAAECAAMRBBIhMQVBUQYTImFxgTKRoRQjQrHSM1JigsHRFXKi8Ac0krLC8UNz4f/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACURAAMBAAICAgEEAwAAAAAAAAABAhESIQMxQVETYYGRsSIyQv/aAAwDAQACEQMRAD8AxkwSjYQn2URxUl1WetyPI4meuEG0lTBKR0jjAXlMSQFvebTcTGxGBUnQkwL8NRUzZjp+Ubaso1vF8fXD0yFvqR9IjaKyn0kAw/D1cX1A69YdeFJ1aM8MOdQLWsALzWGEXTW8HRqdJ+zKocIQdTeaFHAogAF4+GQCAbEITa4jqsJtb7KLhVtzl6OFW+14ZCvW86K6Dn/eHkLxA4nDKBtpM6rgVfVriaWMFwDqBApiFtZuU3IVyZlbhCFdzAU+Eop3Jmq1dAL3Hzi9Sshsc+oN/Db5GbTd5hm4rhKNbUgjpFqnBkA0LfSbTOu97yos50M2S/aNtpYmzAPCVHMwdfhigCxPnN6pR5e8rVw2Zd9puE/RvyeRP2YVLhakXJI+UapYJV5mMKpXQidBBPSPMyvSEvy2/bBHDA8zKHBi28dYKOcCxjYhFdfYqKAEvRp2uBeGnUImSGdto5l6wnd39Iu9a5sI5SOlo6ZOtSOd1bacKwp0gKhjCLWxevFakZqRZxJ0dUCdWLmMuIFhOa2dkLoFJK3kktKH1hKUlSjDqBOV3CiU0hgn3Q6RdKAfQjqIZ8UBrfQTNp8ScsEojxfvEX+SnT3MFVg0eN16Dtw5ASAl7e8uvD1OhUem0YTgLVP29V3J1sDoD5X/ALRgdlqVtm92/wDyJzZTjP2TC4BQfhsJpDCrbaJJ2dqU/Fhq7Lb8D+JD5eXyneGcbV3NGuBSqKxX+BmGlgeR/PkYOQH4+tXZK3CQ55j3gjwNVBOp577mekZLSxUWh5snxMWhw9QNRIMIin4RNW4GhiL1Fh5MDkVxFBWBBEzDw5Ndz7x7E4tFJzPbyi9Oqjag6HreMmxXIm3Bqbbg+lzL0+EUk2QTUXLbcTjuom5MGGRisGl1AXcxmlw5FGghqhDMtuUbAA5xuQMM9sEo5Rd6AG01XF4vUURlQHJjvhgdxBLhFGwmhVIgiRGVCOUJmgvSKVUGa1o87+cz6p8flaMmK5RMgEGGEneEaWgXbWNonE6V8UYWK25wlNoUwUtGmW28FU8oVReWZLQ8hZnsRdIB0j7pFnWSqjriTPqU4Blj9QRZknPR1yhLJJDlZIhTD6uiztSkGkdssBxCuadJ2B1tYeraXHpe/tGbwhM8niMbE03xNQ06Pwpe55FhuSegl6WCbBVkeqA6EkZl1sSDuDsRv52MJ2UxaUy6OQpaxBOg0vpf3jvaPjOHVe5Z1N7FrEXF/hyna/P/ANmRb607EmnwzoefjtA37r7wroxXRVPmT/SDp9qUDWdDbqpBI9jb+k8SlNVe9762JU2DL11GvlOYmkgYliyrrrmJYC2hsTY620i8mxl4ZS9H1KnxXDtTaoHGVfiB0cX2GTc9NLzwGJwlXG1qj0aZILdQAosAoJJtmsAbec88/FW2W9hoC2repn1rsxiKVTDo1NAm+dBc2qE3Ygm5IO4v6cptfyK0o7ky+zeKcMcNiAVqILrm3an68yOvMehnpzTAGs8R2o4qi4qm9I5mogZitrE5iSl/QkH/ADGe6Z1ZQQQQQCPQ6iNpG5zv7Eq1ENEq+GX5ecbxGJVQcup6CIPilva+pH0jJsixHEcNpN4rkEa9biFo4VLXtbkISotwfO1oTDLprpaHWKCOFXzhWwi22h1tfWMLa2s2s2GUcKOkqaU0HtfSK4hgIyZmhYoItWQCHdukG6x0xGhCogIijU7DePHTeKV3AO8ZMXBZqIgmoA6xq4O0Gw5COmDDOqUQTpAmlbSaDJrKsgJh5C8dERTMIlLW0bFOWCa3Gkzoy8ZFpWtOtT0h1WSowAgdDzGCLrFaix9yIjWMm2XlCz2ilUw1VrRZzJUy0oHJJJEKYfXqtEE6zI7VVO7pJYfFUVf9LWm7eY/a+gXwxZRc03pv8jlP0Yn2jV6JePqkX4d2fplFNUZmcA7kZbi4AtMPjnDFouUpsSDmtmt+H+IW/Ke04VVFSijDW6L9BaIdoOG5yKgHw+L2AAbTnayn+YyNdJM6fFTdtUzw4p7bW0OnQi4MFx7BPnQK6spp0ySCLByWNiN72I3tzj+JoBbkMSCRa9rka3ueo8I87nla6lTWLpdrUJUsOlNSza5bXJ130FhNSjTZAcmYDTOEUnwkDcD1I121mcUDlR+HQudDtrkB52/OfQ+yGFKBqp/GwGnkrE/XQehhJ0+M6jwjVEYt3YK5bGzG+lwNDYWsSNJ6XAdrKvcpTTDJUKJTS/312CqFuSGsCbTb7c4kLhwoW7Ow5C+VPEbe+Ue8dwzjDJSV7qKNLluxpJe3uQL+V+t4X0tJOuSWr2ZHDeMZ660MXhjhXq/s2zsyO++Q5hdSeRuRfTS89FV4ctwQvlMXi/FHxeCru1BKKU2wwpv+MuaqX8XWwB06iYOK/wCIuNpuVCUAFLLbu2ubG1z4t9PqZlTa6FrwrT3P2dVGvS/sOfppKNhx0nz+p/xKx7BgDSXMLeGnqNLaXY+s0ez3aN6uIUMP+YXNUF9BXBsXQfhzXAK7eEHfdpbfsnfj4o9T9nAN5UgGOMgg2p2jaRwXVBKPQHMRhVlmSNoMM98OByiddAJp1mtM+owMKYrRnYhBEWwoJmlWUEyJho6YMM8UAOUE9DpNl8KIAU9dIeQcMg0D0l6dHrNZaXWcbCi+htebkMpM44S2sA6Wmm1LKLXvEjTvfym0OCRa0G9Sdqt0ir6zaZSWepFa5hihi+IMDY8yJu8EzS7wbkSLoupB5pydyzkXR8Ps4TXSXemHVkYXVgykdVYWI+s7TWMLTlGciPM9m8QcPUfB1TqCTTY/jQ7fP8wRynqSgdSrXF+YNiGGxB6zM41wdcQgscjpqjjkd7Hy/L88un2lqYX7vGUWLgHK6kWcDnc7+ov5iTa+GX7p7Psxu0+H7l8i+NiucBAbsW0ACcmOXYX3itHh1VKOaqjAqQSxUro5AsSRybKB6manAuIDEY9HrAAsWyjkGC2RRfp+c93xx0XDVS/w5HHqxFlA872t5xcLvyNNJo+O8NYU3RHU+OoSL6KULkA+exE+n0aiYWpnGVaTCmQmwF0sXA5qTnvsRYX5Twi1aNSkaGJBBUs9KoguyVCBmQi4ujWHobHlHG4jWq0cjMpRLku2VCW9Seel7epteTpaUS9phuO8fSpiVqlc1KgwKrmtmI1XW3NgGt0UDnN3DdqsNVS9VqakhgLJnKlhlvZr33nzVsFf9piaYGpsCz6noAI9gnw1M+AtVb95xZQeoUf1vC1qwWUk/SNrHmtikNJnIorUdqYN923VVtci4JA5a2mPxWqlVz3h7qoQt2Kt3bsBbMw1ZCbXJ8QJvcDUx7iLoRapUscq5gDYlm8WW25AGW42ve+wiOAwqVFqFw/copBfwnLUYqEAB2OubTkp6zSwUl7MfEUmptkcZTYHcEFWF1ZWGjKRswJBm/2V/wCZw/qw/wBa/wB4PsvwwY5qmGLqhRC1ItyrlwMqNyRyTdTz1Go19XwrsFisO9KrUegFpNmYCo17Z1Nh4LcuZEoqS9kb2l0ewCC86yiOLg2J/Dp/Eun1i/FQMPQqV6hBFJcxVSCTqB7bzc0R4U/gA4EC/lND7AWFxsdR6Sf4cesPJA4V9GHXp3FoocIJ6b/Cx1nRw5ec35ED8TPLUsHzjP2KelXAIJ00kE35Bl4jzX2XTaLnBEa2npXKDYCLVXAGk3NjfjRiHCEjaCbCkTWepaK1nBEKpm4oy6mD84hXp2Fuk2hVGxmVjdzHTYMRj10HSJNHa79Zm1qkIUiVGiFcwlWtEsRWgr0NKKOYKDaoDzkRxJFQtpJySNgun2tDeHiVGpHBqI7OUuoMvXw61FyVEV16MAR6684ticWlFGd/hRWY7nRQWO2p0BOnQzDwWIq8RGZXNOiRoB8TDzt67XMm6XopMNrl6QXHdmMEDc1e4PTvEsPZ9frB/wCDUcTZf8RNcLsveI9uWniOvtNXD9nMMm6Zz1J/taV4p2fwzUnJpJdEZgWRX1AJA8V/TTWB79FFS3Nf8C79jqFNHKAvUKtkNU3RXtoSigAgb2N9pkYHsTSpm9eq9RzlU5iFQoSMwsLkCx67gcpnYTGVFrVqeGrPSSiaaZXNSth+9UBaoYNdqa59AVPsRNehxc1ago117iqMpK3DK6E2D032ZfMba9DI26+Dp8Ur/p6ZPF+Ad1TNRMKtKmoP3jkub5mFgim5Flz3vsdt7eXxNegGJQsmTvMqkGzuCcmYD4eV+R8tZsdo+0lZ17hGRqTZmNNkU5GLkoGAJs6ggEg69OqD4ynXw9SjkVCi9+mqj75Ci1FU2GbNT7xtdSVA1sIZ3OwUYT12vmJuWJJJ1uxNyT7zU4Vjfu8UhtZ6SuNNe8pumUA9Mrvcc9ILhfAKuKLd0BZO7zMb2DPmyjS5/C3paQU3Vmw1UBTQSvou+ZQ76m9mF2OttiOgh0CX2D4ZjlpJUYgM5qUWVTsbLXBb+VnRh5qJrVONpWRaSYcl2NMBzkZmcLlKkhNVYm59vfzdOixp5ytlDWzW+Ifw33t5TV4Gi95RbX9uOY/AEYbecZLWTdcUbtLgWLPxYNfcUx+QF/eemp8Pf7DXoPQ7t2DshFiCwVQq+C9tQeU9U72MHVqxnOkV52h/DcQK00UjxKlNT/mCgH6zj8TPlMmpVgBUMKiSb8tGz/iDGVfGmZaORIasPBA5s01xpi+IxZmc2IMFWxEPFG5sdOKvB1cXaZy1xA1q2l43E3NjVXF3ilXFxOtjAJnVsVeFSbkaX2k78oN60zlxOm8C+Ky7nQx+JuRzGVL6zKq1eUvi8WDc3mS+KF4lNIpKbGnfSJYh76QdTE32lFMnVaVSwhEmYDada0FeKEazyQGaSHTYfb6JjQcAEswVVDMzMbKqKCzMx6AAn2iVFTLYunn7ukwutV7uOuHoKazqfJnWih8qhHONbxHN41tYK4fAtXdMTUZ0K60UFgaVNtmcEG9RhYtfYHLyN0KAPDsQQLDDV3HhGi0MQ17AdKb5fD0Klfw+L05cnU7nU+p3nmu0vEkzig6B1KOaoJsO7K5snqcoYH8JCMNjJ1OL9ToinTa+DYr9p8KjFTWQsu4S7lfI5QbGIca7S0zh3qUXzZBmN1YeMFRSXUC96jIT/Crz57j8AadamlNGdqzDu6oNu+pEj41sQHGqsBY3AOtwTocQw+YUMLT8BrBcQwZlIRymSjTLCw0dqnLeosDrUMvFKe/RpcN4aycOAc5WrO9Ri2hyJmCZj5+Jtf3l6Tzy4vvHOHxLeHOwpVD8VCrewII1yGwDD0I1AIAvEKz0WwtZnDUS5CsdfCDmpvfcDW3T0mZxFr1H53Y/WJj+SrazoHVpvSdqbrlZGZWXowNiNN/WRKliD/sjmJq9olNSnh8QfjZO6qG29aiq2Y+ZR0H8hmEWMIvo18LxerRz925AqBQ4IBDZSSpPQgk7dTyOt+GOalR3c5iaeILsSBq1NgNTzvbSYov1nQsxtGMA5BsdQVZbHoQT/f533mjwxspo/wD2X+YP6RMkG0fwj6Iejj6h48vsna6Pt9R4F6oi1SvpFftIPOVw4tNEAHWdNolSxAOl501dYcANOwgXeBbEgSneXmwxdniWJq2l3qRHE1tYUjHTVgqmI0MXd4Co4tvHSMDxNUWidSrpJUYXitaoBCZHWrRavXvpKu8VrVgJm8RSVrK4hrxVlEual5QtOeuy89FMoktIxnA0Uc6ZUidvKsZjHMsk5JAY+70oDHYtaWIw4YEhqGOAtyfPhmOn+WnbTrGqJmZ2iw5qHClSBkxDISbfDiEyi56Z6aC2xLrH8voj4c3GNYnilNN83sLf91p4fjTd+arKQrVTbMTcBBYW052BHoTPYvw2np4b7a3I/wC208l2pw/dMGCkU6q2NifBUAswDHa+/r5RWn8lvFUa1O/uV4dQTuES5+7ao4dyxOcC6008AAN0BGulwb8pg4w16juoRirAhlAYh6dN/CzADMqgkG+m4jmerQwjhqjMzV0RFJLDwIWZlB1sqshPm6dDdu4xSDuk7iupIRM+Y1kUC6EH4Xe+lxYslt2FkZVesMjiiVxWviSi1XCP8ILlWUFWJtpcczIz1FZUNKoXcgKChUuT+7e9950O+OxjORbPlAsLCnTsFCjplUEW8p67juIyYnA8kD1AOgZwqf1WMk8J1aVYjyGMtUwXea3TEog1NhnpOzi23/x0zeYagnQC5OwGpn0TtlWVnoUQF+J6riw1VFyIT7l1/llcDgqdKk+IsqvVvTp2VNMhDVGUEgAkHL7CI+mUlclp8+IsbEWPnOxzjKUxV+6LMtlvmH4/xBdTdekTpNlIIOoIIOmjXuN9DMKzSocBxLKHWndWAYHOmqnY2zTT4LwSoWUVaTZQ4Y2emBpfezX58hHsNx96rKoTSwuRyNugFgJrLcC40lple0ct3S6aN2tXW0zWqxCnir6S/em+0fCAw2K+ksmLJidYX2EHTa2kbDGslW8OOsz8O/WN54MMdqNEK9jD1KsRrPrGSADqNE6ptDVKkTrPHQQFWJ1zeMVXiztMxkLs8BUQQzmwgKjXk6KyCtIVkzSXkygNhOAS5nYuB0pacKzt5wtMwopaSdzCSKE+8U2gOIYYVaboSRmW11+JTcMrKf3lZVYeaCXU6SBjeXqd6OOax6jN4VxHvb06lhVXR1G2a17r/Cw8S/wm26tacVpp3b98uenlJdeYCi+dfPy+XQrdoOBvVIrYZslZNraZhe9vnrbrqCDfNhVO1dWxTFU1RqPje+YGo9Mg0kC8gz5M38ObQCS3FjOhJOuU/uK4vhNfF1e4pFV+yqEc3IX7TUYvXCkDcOcn+WkI9g+xdRGDVKoUDkgJY+QJtb1tNXsEtM4e9w1VqlRqpJBYuWNiediLH3M9PWyqLtZR52AmUrDX5a1pHzji1J8LX+0AXYa1lAA7ymSB3yjYEmwcDZsp2ea/GxQxWGDiqqhStRXGpUD47i9xoSLb3tzsJXtZxeiVVKbq75xlyjOLahl0+LMCVKje8S4N2bNy1ZClHOXSi1i7KCcnfHoo/B13g7XSM2mlT6f9mDVxL16+bK2fEHJTBB8NNTlBb5FmI0vmMcrVe8RKVLM4pqQCNbu7lmYnqbge03OOVUps70x989Lus37lNma7eTNqB6N0mY6U04cEporuldzUcHK6qUslyNct7WO3hI63TOzplvjv2ZNbh70WHeIyOLOA4IuvIi+4PXaZycKdqzU6YBIuRd0QFORzOwG1uc16eJbEUqgcl2QI1IE5mC07M6hjv4A1vfQRN6feVqYzZb0xcra/hLLtyuAPnHzSHLs9RwjEIKfdsw7ykqKwBVwbWVrOpINjppcRl2B2nnuHYPu6rMviXJlBJ8QfMpvb0Df9UfqMQb39pWU/k5rS3oaRPFeMgXiNPEXjC1I2CMYQ67QyoL3AgEecatrNhh1qd5UmVWreVYQgBO9zaLOsO4Ai9VhGALOesRqvGq4MQc3jBQBt5V0l4JnmDoCosWyxhoAydIrLwEyyS7Shk2iqZyVM7eVaKwo4ZRjOs0oTFY6KXkkkimPt64oCFSreZKk3hkZhOxyeeqNhakWx/D6OIFqyK+lgTowHkw1HsYBcQRDCsBJtDqvowsR2EwzG6PUTyBRgPTMt/rKp2FoXu9Ws1uV0X6hb/WbmLxopo7kEhFZrDc2F7D1mAnbKw+8pBB51LufRAl/naI0kWl3S6NbBcHoYfWlTCn983Zz/ADNc+0W41xhKS5c3jI0AsbeZ6e88vxTtjUqXWkO7Xr+M/wBp5qpVZjckm+99ST5mI6+ik+LvaN+tj1KlyC6IyrlD5Weo6v42Yg3sEta3T3yEZC1rhRc6FmvbmMwX+kqrjuSLi5qIbX1sqNrbp4oDGk1CCSNLgAX2LMbnz8X0EmdDZs0scaIFSmoIQroH5EkagoNDqPeFp8LepV+04ekwoHISGZSURvA1gNSq3HLpPOgFVyg6EroL8r2uPee+7KY001RDsUUEHqbkr7j6gSk6/Zzeb/Fal7M1w1NiCLEbxlGDbz0eP4QtYa+EC2R1GoXkGHP/AHtPN4nCvhnAqC6nZhqrD+h8pZPTmTTCd1bb1kFXqJSrihyEXWrnjYY0UcWnBUubCCQW0hVsL2hwAY1bbSnfypAG+pnGUQikXEA7wNVwdoMIPOccW0EKQAbPyijrGaqxeq8YKF3EWZYZ2gmaDApgGnMkudZy8GBdfQBklCsM7QLPJ0kistsq0ExlmaVMjTLJAmnAJZhKFoo528kHmnYDH1mnUI5GFFY2iaNDK4ne0eWmHDEiZWOxNWtX7im/cqqB2YC7tc2svSaOYTGq1RRxgd9ErIFDHYOpGhPLYfOTtFfGxTi+FFOncYh3fMVIYeInMFPjHmwFvOeTYknre2vrl/UvznoO0YFMgNUW7NUYL48wDVEbXTLawPPlPPLWAtfTROXId1+lpyU3vZ6SzFh0A726/TN+hvlO5TtbUm3ve1vnpJ3mnPZradRV/WsL3wve5tmJ2O3eq/5C8UIEe+1/awP5EfOHQplIZGLXHiBtYC9xa9vwnlyMCKy2tm/CR75EX81Pylmrqb+LfP8AXvv1r84QDyYlE/Z0zy1Ni1/D/Vl+Yh04wRZghFtQQfcflf2matZb/EN1+Wakf/BvlBCoMtr8h88jD8zaMqYriX7PonBe29BUyVkqZrGxXJlvrzLCw0mZxDja13UJ8Nz7AA29/wAp4hBc2BHubDnPQdnige2jtY2IvlHXcb+0eKbZz345lajRziCpvYw3FKqgrYAfFew/P/fOZhr+UsSS1G8rjeDatbWZaY+wtODF3jA4s1qmLB2hEqCYq4mHXEdNIUK5NhWEHWPSZi4rKbXvC/aLw4KTEVIq79Jao8VdoTHXa8A0q9W0C1eB0kFTT9BDKXnM8l5tDgN2gTCuZWSpay8PECIlbwjEQZMi0WRGizxgmLuYrGRWSSSIMfTKbw6tJJPTZ4yLhoPE0FqgpUUFT9D1HQySRGUk8ZxfBroLMCjMl8wa6hgBoRyBPPymV3JI16D5eH9X0nZJw17PUXoutC42289fxfphRgjtfY2/1Zf6ySTBAHCefn9FP/lJ9kHyv9M36TJJAYsMF/v/AKf1Cc+zED5fIi/5SSQmJTpC+tx6an85v8EpqpuNlBJNhfXwj6kSSSseyHm9Eepmu3Vm36coFjJJKkkDJg76zskAxZWtC94BJJGQrKrW1h2r2EkkMvoSktF3xE6rySQpsDlYL1yItaSSTv2V8f8AqWAnWnZIy9AfsGZUmSSJQ8gmgyZJJFlkSBYTskAyKySSRQn/2Q=="
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.istockphoto.com/id/1295900106/photo/data-scientists-male-programmer-using-laptop-analyzing-and-developing-in-various-information.jpg?s=612x612&w=0&k=20&c=2z9VEOlF7mAgeZDEsnetqFMyQS6xqjmXDoryrQ_LeOc="
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.etimg.com/thumb/msid-88607879,width-1200,height-900,imgsize-55812,overlay-etrise/photo.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
    </div>
  );
};

export default Sidebar;
