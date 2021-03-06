class ModalDialog extends HTMLElement{
    _templateHTML = `                
            <div class="modal-content" id="modal_content">
                <span class="close" id="close">&times;</span>
                <div>
                    <slot name='slot1'></slot>        
                </div>        
            </div>        
    `;

    _shadowRoot;
    _modalDialog;
    _opened;
    _template;

    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'closed'});  
        
        this.render();
    }

    render(){               
        //styling
        let linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', './src/components/modalDialog/modalDialog.css');
        this._shadowRoot.appendChild(linkElement);

        this._template = document.createElement('template');
        this._template.innerHTML = this._templateHTML;

        this._modalDialog = document.createElement('div');       
        this._modalDialog.setAttribute('id', 'modal_dialog') ;
        this._modalDialog.setAttribute('class', 'modal');                
        this._modalDialog.appendChild(this._template.content);
        this._modalDialog.addEventListener('click', (event)=>{   
            event.stopPropagation();                     
            this._closeDialog();
        });
        this._shadowRoot.appendChild(this._modalDialog);

        this._shadowRoot.getElementById('close').addEventListener('click', (event)=>{            
            event.stopPropagation();
            this._closeDialog();
        }); 

        this._shadowRoot.getElementById('modal_content').addEventListener('click',(event)=>{      
            //console.log('modal_content');
            event.stopPropagation();
        });
    }  

    connectedCallback(){        
        if(!this.hasAttribute('opened')) this._closeDialog();   
        
        if(this.hasAttribute('canclose') && this.getAttribute('canclose')==="false"){
            this._shadowRoot.getElementById('close').style.display = 'none';
        }
    }

    _openDialog(){
        this._modalDialog.style.display = 'block';
    }
    
    _closeDialog(){
        this._modalDialog.style.display = 'none';
    }

    static get observedAttributes(){
        return ['opened'];
    }

    attributeChangedCallback(name, oldValue, newValue){
        //console.log(name, oldValue, newValue);
        if(name === 'opened'){
            if(newValue === 'true'){
                this._openDialog();
                this.dispatchEvent(new Event('DialogOpened'));
            }
            else        
                this._closeDialog();            
        }
    }
}

export default ModalDialog;

window.customElements.define('mo-dal', ModalDialog);