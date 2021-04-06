import React, {Component} from 'react';

export default class VideoLinks extends Component{
    constructor(props){
        super();
        this.state = {
            videosLinks: ['kLivrgB7GY4', 'BR87VA8suLA', '434Yxk7a1cU', 'wGXYAkiOzHE', 'ErnpQhCW_Gg', 
            'VvgeQnOnuzA', 'Q7yKMW8h2sQ', 'Pr-YhkAZjFQ', 'KowqEilzgcs', '7h_KCmEX8qw', 'dws1IxL5N-E',
            'icXI3K47x-0','Ebyvi7ldonY', 'WaGMewRkBK0', 'h-gQQDDYLFU', '8C77EhDj6zQ', 'RvvqlgBu7EI',
            'ZPj4MIBs4o0', '4K1-AnvG61g', 'UUcIgERXgl0', '5Pr_Yx1XXCc', 'p8w0jOPdxoM', '6_SmMUgFyNc',
            'pYsYZEReuTI', 'CA1SlAWQhhY', 'G1AlE5eZSe4', 'COzxLCg2lv4',
            'qhT-B3Xqhss', 'kvu0Caqz2j8', 'XSQHMakMOKE', 'hliL7RBDDgU', 'WR2Or3vBP5w', 'Xv1wjLx1byQ',
            '0d_Ww7-3JCY', 'tr-chQnhbsY', 'JHR0bxAAHnI', 'jnFqUP9Dq8A', 'YB_o0jcubbQ', 'ENqo-qJ4Vq4',
            'JFddwusHU2E', '5PNinV1UQ2Y', 'yt8WEClckX8', 'C3NPaUeVYAo', 'C3NPaUeVYAo', 'CuxsuvuCJCU'],
        }
    }

    getVideo(){
        return this.state.videosLinks[this.props.indice];
    }
    render(){
        return(
            <section className='modals'>
                <span>Video</span>
                <iframe id="ytplayer" type="text/html" width="426" height="240"
                src={`https://www.youtube.com/embed/${this.getVideo()}?autoplay=1&origin=http://example.com`} 
                frameBorder="0"></iframe>
            </section>
        );
    }
}