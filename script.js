document.getElementById('inpZap1').focus()
var inicio = 'https://api.whatsapp.com/send/?phone=55'
var fim = '&text=+&app_absent=0'
var save = localStorage.getItem('chkEnter')
if(save == 'true') document.getElementById('chkEnter').checked = true
function gerarZap(num)
{
    var meio = document.getElementById('inpZap' + num).value
    var ddd = document.getElementById('inpddd'+num).value
    var link = inicio + ddd + meio + fim

    document.getElementById('a'+num).setAttribute('href', link)
    document.getElementById('a'+num).innerText = 'Whats para: ' + ddd + meio

    document.getElementById('inpZap' + num).value = ''
    if(document.getElementById('chkEnter').checked)
    {
        document.getElementById('a'+num).focus()
    }else
    {
        if(num<10)
        {
            let prox = 'inpZap' + (num+1)
            document.getElementById(prox).focus()
        }else
        {
            document.getElementById('inpZap' + 1).focus()
        }
    }

    localStorage.setItem('chkEnter', document.getElementById('chkEnter').checked)
}
function lerEnter(e)
{
    if(e.key == 'Enter')
    {
        // console.log(e);
        // console.log(e.composedPath()[0].id);
        let temp = e.composedPath()[0].id
        let num = ''
        for(i=6; i<temp.length; i++) num+=temp[i]
        // console.log(num);
        gerarZap(Number(num))

    }
}

document.onkeyup = lerEnter