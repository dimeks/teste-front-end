import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { getVideosBySearch } from '../store/actions/searchAC'
import { Busca } from './styles'
import * as C from "./styles";
import { HeaderContainer } from './styles'










class Header extends Component {

   
    buscaInput = e => {
        if(e.keyCode === 13){
            const valor = e.target.value            
            console.log(valor)
            this.props.getVideosBySearch(valor)
        }
        
    }


    
    render(){
        
        return(
            <>
                <HeaderContainer>
                    <Busca>
                        <C.Input onKeyDown={(e) => this.buscaInput(e)} id="inputx" type="text" placeholder="Pesquisar"></C.Input>                            
                    </Busca>
                </HeaderContainer>
               
            </>
        )
    }
}


const mapDispatchToProps = (dispatch ) => {
    return{
        getVideosBySearch: ( params ) => dispatch (
            getVideosBySearch(params) 
        )
    }
}






export default connect(null, mapDispatchToProps) (Header) 