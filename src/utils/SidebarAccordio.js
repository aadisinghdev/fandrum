function SidebarAccordion(id, sign) {
    
    if(sign === 'add'){
        document.getElementById(id).style.display='block'
        return 'remove'
    }
    else{
        document.getElementById(id).style.display='none'
        return 'add'
    }
}

export default SidebarAccordion