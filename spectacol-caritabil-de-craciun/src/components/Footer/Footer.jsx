import React from 'react';
import './Footer.scss';
import {Link } from 'react-router-dom';
import logo from '../../assets/svg/LogoOSFIIR.svg';

const PinSVG = () => (
  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.04521 1.30842C8.16645 -0.464728 12.003 -0.433737 15.0949 1.3896C18.1565 3.25007 20.0172 6.57047 19.9999 10.1423C19.9286 13.6907 17.9334 17.0262 15.4393 19.6047C13.9998 21.0996 12.3895 22.4215 10.6413 23.5434C10.4612 23.6452 10.264 23.7133 10.0593 23.7444C9.86234 23.7362 9.67051 23.6793 9.50113 23.5788C6.83208 21.8932 4.49051 19.7415 2.58906 17.2272C0.99799 15.1285 0.0940515 12.5929 1.65963e-06 9.96487C-0.00206383 6.3862 1.92396 3.08157 5.04521 1.30842ZM6.84936 11.4461C7.37439 12.7116 8.61368 13.5371 9.98858 13.5371C10.8893 13.5434 11.7551 13.1907 12.3932 12.5575C13.0312 11.9243 13.3884 11.0632 13.3852 10.1661C13.39 8.79686 12.5655 7.55974 11.2967 7.03242C10.0278 6.5051 8.56491 6.79159 7.59101 7.75813C6.61711 8.72466 6.32432 10.1806 6.84936 11.4461Z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#E6D7BD"
      fillOpacity="0.5"
    />
  </svg>
);

const PhoneSVG = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M0 0H20V20H0V0Z" fill="url(#pattern0_213_357)" />
    <defs>
      <pattern id="pattern0_213_357" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_213_357" transform="scale(0.00195312)" />
      </pattern>
      <image id="image0_213_357" width="512" height="512" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAQAElEQVR4AeydS4hd15nvdR4llYWb206V1WVsMrqZNdz4Up50RoELVnpwMSXo2UW+g/TIlGZBIvSorymRmURG8SASmQUkQg9iGQIeJRMVrTRk5oyaBClyyfYlRirpvPr7H59TOlV1Hvux9t7r8TPaPufsvR7f91ur9vqvx167fYb/IAABCEAAAhBIjgACwJMif/r06ZsvXrz4bq/Xe7ff71+eHoPB4OrkuGGf42M4HN45eUyv2ec4/DS+0tOhtHU8fvz4VU9cxgwIQAACEGiMwJkzCICa4KvhVQOshnnSSN+wRvy+HQ9H9t8rr7zyp7W1tQfdbvdep9O5NT3a7fbe5Ni1z/HRarV2Th7Ta/Y5Dj+Nr/R0KG0dr7/++l+Vpx13ZEtN7pMNBCAAAQh4RqDtmT1RmKPevBpXa+jHjby17yM1vGqA1TBPGelda8S37diq22nlaceObDEh8FC21m0D+UEAAhCAQHMElDMCQBRKHurZW2N/1RpTDc0/VG9ejas19ONGvmTylUY3IbAlW2W7RikqzYzEIQABCEDAGwIIgAJFMdPg31fvXj17a+z3rDHV0HztPfoCLpyKIts3Nzc/RQScQsMJCEAAApER+MYdBMA3HFb+f9Loa0j/4UyDv70yYkABTARsmwi4HZDJmAoBCEAAAgUJIACWgJvT6GtIP8ge/hI3j10yEbDDmoBjSPgBAQhAICoCU2cQAFMSk89Jo6/5/GlPP/pGf+L60YfWBDAVcISDLxCAAASiJIAAmBSrnpUfDof3Z4b3o+7pT9xe+LGxsfHhwotcgAAEIACBQAm8NDt5AaDhbmv4H+pZeRv+jmpO/2Ux5//Wbrd3NRqSPyYxIAABCEAgBAJJCgANb08e23uo4W5r+JPu7S+qqCaKPlp0jfMQgAAEIBAegVmLkxIA2qDHGv4b2pTHerh6bI+Gf7Y2nPhuwmhbIyQnTvMTAhCAAAQiIJCEAJj0+G9ogx5r+HcjKLfaXDBe18WvtgzJCAIQgAAEKiJwPNnoBYB6sJMePw3/8bLP9MtGAbZYEJgJFYEgAAEIBEUgWgGgBWzD4fC+5viDKhEPjbVRABYEelgumAQBCEAgD4GTYaMTANN5fj3OZ71XVvWfLPGCv7vd7r8UjEo0CEAAAhDwkEBUAmAwGFxlnr+aWmZiakd7JVSTOqlCAAIQgEC1BE6nHoUAUK9fw/02VL132kXOuCKg6RQWBLqiSToQgAAEmiUQvADQIj/1+q2HynB/xXXJGGtB4AcVZ0PyEIAABCDgmMC85IIVAOqJ2pD/DfVK5znGuWoIaJRFIy7VpE6qEIAABCBQF4EgBYBW+G9ubn5mjRGP9tVVU2byWV9fvznzk68QgAAEIOA1gfnGBScArNd/dbLCn1385pdp5WdtKoAFgZVTJgMIQAAC1RIIRgBoyH84HN6xXj8L/aqtE5lSZ+olEyYCQQACEGicwCIDghAAmnPWkL96nosc4Xy9BKwstjQaU2+u5AYBCEAAAq4IeC8ANN9vc877anBcOU06bghoNEbizE1qpAIBCEAAAu4JLE7RawGgxp/5/sWF58MVE2csCPShILABAhCAQE4C3goA7Tqnxj+nPwSvmYCNzOxIqNWcLdlBAAIQgEAGAsuCeCkAtLstP9tu9t8xwrvlDwMrqI3+swRIIQAACEMhCwDsBoIVlrDDPUnT+hLFRgG2JNn8swhIIQAACEDhzZjkDrwSANf43tLBsuclc9ZGARJse1fTRNmyCAAQgAIHTBLwRAJPGn539TpdRMGc2NjY+DMZYDIUABCAQOYFV7nkhADR8bD1/Gv9VpeX5dZUhCwI9LyTMgwAEIDAh0LgA0Gp/DR9P7OEjcAIsCAy8ADEfAhCIhMBqNxoVAGr8rcFgtf/qcgomBAsCgykqDIUABBIn0JgA0FAxjX+ctU8jOiwIjLNs8QoCEAiDQBYrGxEA2j7WGv+PsxhImDAJsCAwzHLDaghAIB0CtQsA9QzX19fZ2z/yOsaCwMgLGPcgAAGPCWQzrXYBsLm5+anNE29lM49QIROwUR52CAy5ALEdAhCImkCtAkDP+lvjvx01UZw7IqCy1kLPoxN8gQAEIACByglkzaA2AaCGQMPCWQ0jXBwEWBAYRzniBQQgEB+BWgSA5v1tOJjH/eKrPys9slGArY2NjQ9WBiQABCAAAQg4IJA9iVoEgM37385uEiFjI2AjP3t68iM2v/AHAhCAQMgEKhcANu9/1XqBOyFDwvbyBNbX12+WT4UUIAABCEBgGYE81yoVANrsR72/PAYRNk4CEoFaBxKnd3gFAQhAIDwClQoAm/dns5/w6kRlFmtBYGWJkzAEIACB5AnkA1CZALCh/xvW6+N5/3zlEXVo1QerF1ejdhLnIAABCARCoBIBoKFeG/rn9b6BVII6zbR6wYLAOoGTFwQgkAyBvI46FwB65I+h3rzFkFZ4FgSmVd54CwEI+EnAuQDQM98a6vXTXazygYDVjx2NEvlgCzZAAAIQiINAfi+cCgA9660h3vxmECM1AjZK9P9S8xl/IQABCPhEwKkAYGjXp6L12xYbBdju9/uX/bYS6yAAAQiEQaCIlc4EgJ75t5s6G/4UKYVE49gowC2NGiXqPm5DAAIQaJSAMwHQ7XZ59WujRRlm5ufOnftRmJZjNQQgAAFfCAFzw4kA0FCu9f63i5lArJQJtNvtXY0epcwA3yEAAQg0QaC0AOCxvyaKLa48GT2KqzzxBgIQqJdA0dxKC4CNjY0Pi2ZOPAiIgEaPNIqk7xwQgAAEIFAPgVICQAu4NARbj6nkEjMBLQjUaFLMPuIbBCAAAfcEiqdYSgCcO3fu/xTPmpgQOE6A0aTjPPgFAQhAoEoChQWAemvW+9+r0jjSTouA1ScWBKZV5HgLAQiUJFAmemEBYL21D8pkTFwIzCPAgsB5VDgHAQhAwD2BwgKg1WpdcW8OKaZOwOoVOwSmXgnwHwIQyEigXLBCAkArtu1GvVUua2JDYD4Bmwq4rimm+Vc5CwEIQAACLggUEgC6QbvInDQgMI+AxCVTTPPIcA4CEIDASwJlv+UWAL1e713doMtmTHwILCNgInNPj5kuC8M1CEAAAhAoTiC3AOh0OrzGtThvYuYgwNslc8AiKAQgkBiB8u7mEgDas916/+z5X547KWQgYHVtRyNOGYISBAIQgAAEchLIJQC63e6/5Eyf4BAoRcBGnG6xILAUQiJDAAIREnDhUmYBoJuwemQuMiUNCGQlYHVuiwWBWWkRDgIQgEB2ApkFwLe+9a1L2ZMlJATcEWBBoDuWpAQBCMRAwI0PmQWA3YTZ+c8Nc1IpQIAFgQWgEQUCEIDAEgKZBIAex7KhWBb/LQHJpWoJWP1jQWC1iEkdAhAIhIArMzMJAN765wo36ZQhoAWBZeITFwIQgAAEXhLIJACs98W+/y+Z8a0hAlYPtwaDwdWGsidbCEAAAh4QcGfCSgEwefafff/dMSelEgTa7TY7BJbgR1QIQAACUwIrBYANu/7faWA+IeADAZuS+pEPdmADBCAAgboJuMxvpQCwYdd/cpkhaUGgLAEbBdjVyFTZdIgPAQhAIGUCSwWAtmE1AcDwf8o1xFPfu93uR56ahlkQgAAEKiLgNtmlAsB6Wv/oNjtSg4AbAiZMt/v9/mU3qZEKBCAAgfQILBUAdpNl+D+9OhGMx51Oh/cEBFNaGAoBCJQl4Dr+QgEw2fyH4X/XxEnPKYGNjY0PnSZIYhCAAAQSIbBQAJw9e/Z/JcIANwMmYNNULAgMuPwwHQIQyErAfbiFAsBurP/bfXakCAH3BLosCHQPlRQhAIHoCSwUAK1Wayd673EwCgJWV1kQGEVJ4gQEILCIQBXn5woAnrGuAjVpVknARqyuP378+NUq8yBtCEAAAjERmCsAOp3Opsj001k/S2m/Cmm+Cmm+Cmk/Cmi+S2m/Cml+V/nS24/C104fD413009n3/w67bfb5756+3V3/17/8/vf95f3/04/1/+c/5w839/8v35e/8+f1/+c/5w/2L9v/+f9u/v5f1/+a06b0+P2+Xy/X+L53//+l2y8d70/T1d95/2b3l+263z/83/8z//0+c1///vX/9/75f0/80/7/8/31e/58/05/2C/82/zV5033+32P6f3t8v5n8+f9e/1v6b/b7/V7/W78/n8z3+63u/V28f395/z1++///3f/r4/f19f201w301+n68X/108d/3m72//v27+25f6z5e69e//7x6/n406/Xv+1z3v40693510/x005x030z8d/9N03/vXb+f/61f/3b75f/6+e20/83439+243+382f1/+a3/71v/m510z+f/9+H///r3+/37f/65e128x/z35/+f/t/f18/+D/w2/f/+/t8f9///7+7f9u/02f8f7v/9//23z9+8P/99/3//Nn/zN/6d/v79/v+f37d3+/99+7//59+3d33939z3/+47+2L4P33w+f0f5z//1t/2z///d/04f/N/n5f/+ff3+/r//7v///f/9f4+7e9v1z3z+0z0///wADs=" />
    </defs>
  </svg>
);

const EnvelopeSVG = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M0 0H20V20H0V0Z" fill="url(#pattern0_213_362)" />
    <defs>
      <pattern id="pattern0_213_362" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_213_362" transform="scale(0.00195312)" />
      </pattern>
      <image id="image0_213_362" width="512" height="512" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAQAElEQVR4Aezava4eyXkn8EOOCE8wIhYwsBeg2dncwi7gjQhuOInuwJdhB5ttJt/Dxs4MKHFKkMkssKtwE4+xgFLDSgYjQ6aGHFcdsofn4/3oj6ruqnp+gprN877d1VW/p7ufP4/09MZ/CBAgQIAAgXACAkC4klswAQIECBC4uREA3AUECBAgQCCggAAQsOiWTIAAAQKxBfLqBYCsYCNAgAABAsEEBIBgBbdcAgQIEIgu8GH9AsAHB38SIECAAIFQAgJAqHJbLAECBAhEF5jWLwBMEvYECBAgQCCQgAAQqNiWSoAAAQLRBT6tXwD4ZOFvBAgQIEAgjIAAEKbUFkqAAAEC0QXurl8AuKvh7wQIECBAIIiAABCk0JZJgAABAtEF7q9fALjv4ScCBAgQIBBCQAAIUWaLJECAAIHoAg/XLwA8FPEzAQIECBAIICAABCiyJRIgQIBAdIHH6xcAHpv4hAABAgQIDC8gAAxfYgskQIAAgegCp9YvAJxS8RkBAgQIEBhcQAAYvMCWR4AAAQLRBU6vXwA47eJTAgQIECAwtIAAMHR5LY4AAQIEogucW78AcE7G5wQIECBAYGABAWDg4loaAQIECEQXOL9+AeC8jW8IECBAgMCwAgLAsKW1MAIECBCILnBp/QLAJR3fESBAgACBQQUEgEELa1kECBAgEF3g8voFgMs+viVAgAABAkMKCABDltWiCBAgQCC6wLX1CwDXhHxPgAABAgQGFBAABiyqJREgQIBAdIHr6xcArhs5ggABAgQIDCcgAAxXUgsiQIAAgegCc9YvAMxRcgwBAgQIEBhMQAAYrKCWQ4AAAQLRBeatXwCY5+QoAgQIECAwlIAAMFQ5LYYAAQIEogvMXb8AMFfKcQQIECBAYCABAWCgYloKAQIECEQXmL9+AWC+lSMJECBAgMAwAgLAMKW0EAIECBCILrBk/QLAEi3HEiBAgACBQQQEgEEKaRkECBAgEF1g2foFgGVejiZAgAABAkMICABDlNEiCBAgQCC6wNL1CwBLxRxPgAABAgQGEBAABiiiJRAgQIBAdIHl6xcAlps5gwABAgQIdC8gADRfIhMkQIAAgegCa9YvAKxRcw4BAgQIEOhcQADovICmT4AAAQLRBdatXwBY5+YsAgQIECDQtYAA0HX5TJ4AAQIEogusXb8AsFbOeQQIECBAoGMBAaDh4pgaAQIECEQXqLd+AaCcpZEIECBAgECzAgJAs6UxMQIECBCILlBz/ScDwKtXr3727t27X79///7/2Bi4B9wD7gH3gHugn3sg9+85weFkAMgn/uEPf/jbtP8PT548+S82Bu4B94B7wD3gHtj7Hlh+vdS3//nNmzf/I+2v/vdkAHj58uUPz58///3333//lz/++OM/XR3FAQQIECBAgMChAqlf/8Pr169/lXv4nImcDADTiULAJGFPgAABAgT2FVhytaXNP499MQDxAASAgK1gI0CAAAECbQqsaf55JVcDQADICjYCBAgQILCXwLzrrG3+efRZASAACAFZwUaAAAECBNoU2NL88wpmB4AAIAVkBRsBAgQIEGhr878oAGQFm4AAAQIECNQQODd2CgG1hLMAkBU2AgQIECBwrcC90bc2//zSAJBN/vD0qf85IENAgbAhQIBAQ4FWmn9e/d0A8Ie/fPby5csf/uEPf/jzP//5z3/++ee//8//8z//++//88//++///u8/Xh2lQSAgK9gIECBAgEAZgaXNP8+hSADIBwsBhYCsYCNAgAABAuUE/rf53xr6otS//Keh7wWADwgBZQUbAQIECBCoJLCu+ec1/RYAcvvh3wRkBhsBAgQIEFgm8Lj5r7nW1n/5T9e8DwD5hyEgK9gIECBAgMAqgR/6TcDq0s82+p//dMWbASB/6zcBWcFGGwECBAgQWCPQQ/PPq3obAAIBWcFGgAABAgTmC7xs/uvzP3nC3v/yn654MgDkL/0mICvYdhkBAgQIEJhX4MjmP6/4bAC4/fAfAmQGGwECBAgQOClwcfO/NObZ70n8y3+6xroAkE/ym4CsYA/YCBAgQIBAjEBfzf8y36sDQF7BbwIyg40AAQIEAtuGfpFvZ/PPV1scAHJJPywFZAUbAQIECBBoXaB/88/1Lg4AuST/n4CsYCNAgAABAn0IvD3//vL/3+Tvv9ybw/9206//6Wp7BID/b2r9zwFAiMj/I0CAAAEC5QUuNf+d/11w6l/+k5P5m0IAyKj/B0DWZ2z+dAkQIECAAIFTAg+/j//WqGf91r/8pym+6w+l4g/+JgRkBhsBAgQIEGhf4Kzmn2tzf/3v379/+f3v/54CQP6b/29AVrARIECAAIHwAs03/7z+s/wX92+/+/vf//W46P4AgH+y/r/8fwhIE7YECBAgQKAjgdfNf83N2f/l/20q/5/X0x5+P//1vwUBAgQIECBQQqBF8//c7+G50wDwxz/+8Z8IARWFzBgECBAgQOC+QIvm/7nhb33/t8kCQP6b/+9AVrARIECAAIHgAuWbf8/9//v8XwD48cf//N4IEJAUbAQIECBA4CSBMps//6/t//1v+/t//3f3yv8u1P3v68vffP31vxEBsn6O/8nN7xMCsoKNAAECBAgsEnjb/Df+a/v9v/9t89//bft/d//v//z/779v88v/+v88/3b1n9v6/8b/+/v/y27++5f+21j+e/1v6+0z0///wADs=" />
    </defs>
  </svg>
);

const ContactInfo = [
 {id: 1,
  icon: <PinSVG />,
  text: 'Politehnica Corp CD, Splaiul Independenței Nr.303 București'
 },
 {id: 2,
  icon: <PhoneSVG />,
  text:'+40 731 080 207'

 },
 {id: 3,
  icon: <EnvelopeSVG />,
  text: 'office@osfiir.ro'    
 }
];

const Links = ['Acasă', 'Artiști', 'Sponsori', 'Echipa', 'Donează'];

function ConvertToLink(link) {
      if (link  === 'Acasă') {
            return '/';
      }

      if (link === 'Artiști') {
            return 'artists';
      }

      if (link === 'Sponsori') {
            return 'sponsors';
      }

      if (link === 'Echipa') {
            return 'team';
      }

      if (link === 'Donează') {
            return 'donate'
      }
}

const Footer = () => {
 return (
  <footer className="footer">
      <section className="flex-container">
            <div className="logo-container">
                  <img src={logo} alt="Logo OSFIIR" classname="footer-logo" />
            </div>
            <div className="contact-container">
                  {ContactInfo.map((info) => (
                        <div key={info.id} className="contact-info">
                              <div className="icon">{info.icon}</div>
                              <div className="text">{info.text}</div>
                        </div>
                  ))}
            </div>
            <div className="cta-container">
                  <div className="cta-text-container">
                        <h1 className="cta-text-heading">Binele începe cu noi.</h1>
                        <h2 className="cta-text-subheading">Spectacolul Caritabil · Împreună, din inimă.</h2>
                  </div>
                  {Links.map((link,index)=> (
                        <Link key={index} to={`/` + ConvertToLink(link)} className="cta-link">{link}</Link>
                  ))}
            </div>
      </section>

      <span className="separation-line"></span>            

      <section className="copyright-container">
            <div className="copyright-left">
                  © Spectacolul Caritabil. Toate drepturile rezervate.
            </div>
            
            <div className="copyright-right">
                  Confidențialitate · Contact
            </div>
      </section>
  </footer>
 );
}

export default Footer;