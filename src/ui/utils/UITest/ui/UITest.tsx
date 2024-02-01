import React, { useCallback, useMemo, useState } from "react";
import { validationStatus } from "ui/components/controls";
import { Button } from "ui/components/controls/buttons/Button";
import { Checkbox } from "ui/components/controls/inputs/Checkbox";
import { RadioGroup } from "ui/components/controls/inputs/RadioGroup";
import { Select } from "ui/components/controls/inputs/Select";
import { Option } from "ui/components/controls/inputs/Select/types/SelectProps";
import { Slider } from "ui/components/controls/inputs/Slider";
import { Switcher } from "ui/components/controls/inputs/Switcher";
import { TextArea } from "ui/components/controls/inputs/TextArea";
import { TextField } from "ui/components/controls/inputs/TextField";
import { Link } from "ui/components/controls/links/Link";
import { Card } from "ui/components/sections/Card";
import { Loader } from "ui/components/shared/Loader";
import { LoaderSize } from "ui/components/shared/Loader/types/LoaderProps";
import { ProgressBar, ProgressBarType } from "ui/components/shared/ProgressBar";
import { Text, textColor, textFont, textSize } from "ui/components/shared/Text";
import { Modal } from "ui/utils/Modal";
import { NavBar } from "ui/widgets/NavBar";
import { Table } from "ui/widgets/Table";
import { TableBody } from "ui/widgets/Table/components/TableBody";
import { TableCaption } from "ui/widgets/Table/components/TableCaption";
import { TableContent } from "ui/widgets/Table/components/TableContent";
import { TableData } from "ui/widgets/Table/components/TableData";
import { TableHead } from "ui/widgets/Table/components/TableHead";
import { TableRow } from "ui/widgets/Table/components/TableRow";
import { Tape } from "ui/widgets/Tape";
import { Post } from "ui/widgets/Tape/components/Post";
import { WindowBrowser } from "ui/widgets/WindowBrowser";

import IconLink from 'styles/assets/icons/link.svg';
import IconWarning from 'styles/assets/icons/warning.svg';
import IconError from 'styles/assets/icons/error.svg';
import IconSuccessfully from 'styles/assets/icons/successfully.svg';
import IconInfo from 'styles/assets/icons/info.svg';

import './UITest.scss';
import { Alert } from "ui/utils/Alert";
import { AlertType } from "ui/utils/Alert";
import { ModalConfirm } from "ui/utils/ModalConfirm";
import { Notify, NotifyType } from "ui/utils/Notify";

const UITest = () => {
  
  const [windowOpen, setWindowOpen] = useState(false);

  const onCloseWindow = useCallback(()=>{
    setWindowOpen(false);
  },[])

  const onShowWindow = useCallback(()=>{
    setWindowOpen(true);
  },[])

  const [isModal, setIsModal] = useState(false);

  const onCloseModal = useCallback(() => {
      setIsModal(false);
  }, []);

  const onShowModal = useCallback(() => {
      setIsModal(true);
  }, []);

  const [alertShow, setAlertShow] = useState(false);
  const onShowAlert = useCallback(() => {
    setAlertShow(true);
    setTimeout(()=>{onShowSecondAlert()}, 1000)
  }, []);

  const [secondAlertShow, setSecondAlertShow] = useState(false);
  const onShowSecondAlert = useCallback(() => {
    setSecondAlertShow(true);
  }, []);


  const [modalConfirm, setIsModalConfirm] = useState(false);
  const onShowModalConfirm = useCallback(() => {
    setIsModalConfirm(true);
  }, [])
  const onCloseModalConfirm = useCallback(() => {
    setIsModalConfirm(false);
  }, [])

  const [notify, setNotify] = useState(false);
  const onShowNotify = useCallback(() => {
    setNotify(true);
    setTimeout(()=>{onShowNotifySecond()}, 1000)
  }, [])

  const [notifySecond, setNotifySecond] = useState(false);
  const onShowNotifySecond = useCallback(() => {
    setNotifySecond(true);
  }, [])
  /*
  * наполнители для компонентов
  */
  const posts = [
    {id: 6, title: '[Разработка] ', subtitle:'02/11/2021', body: 'Набрал этот текст'},
    {id: 5, title: '[Разработка] ', subtitle:'01/23/2021', body: 'Вторая система регистрации/авторизации завершена.'},
    {id: 4, title: '[Разработка] ', subtitle:'01/22/2021', body: 'Первая совместная игра через \nлокальную сеть.'},
    {id: 3, title: '[Разработка] ', subtitle:'01/19/2021', body: 'Возобновление работ над сервером.'},
    {id: 2, title: '[Разработка] ', subtitle:'winter 2020', body: 'Остановка всех разработок. Команда из 3х \nчеловек распущена.'},
    {id: 1, title: '[Разработка] ', subtitle:'autumn 2019', body: 'Разработка Chill-Island и моста к нему.'},
    {id: 0, title: '[Разработка] ', subtitle:'june 2019', body: 'Зарождение идеи создания проекта.'},
  ];

  const options = [
    { "title": "янв", "value": "01" },
    { "title": "фев", "value": "02" },
    { "title": "мар", "value": "03" },
    { "title": "апр", "value": "04" },
    { "title": "май", "value": "05" },
    { "title": "июн", "value": "06" },
    { "title": "июл", "value": "07" },
    { "title": "авг", "value": "08" },
    { "title": "сен", "value": "09" },
    { "title": "окт", "value": "10" },
    { "title": "ноя", "value": "11" },
    { "title": "дек", "value": "12" }
  ];
    /*
    * состояния для компонентов
    */

    const [regForm, setRegForm] = useState({email:'', nickname:'', password:'', confirmPassword: ''});
    
    const [checkTheRules, setCheckTheRules] = useState(false);
    const toggleCheckTheRules = () =>{
      setCheckTheRules(prev => !prev)
    }

    const [descriptionCharacter, setDescriptionCharacter] = useState('');

    const [sex, setSex] = useState('');
    const handleChangeSex = (e: any) =>{
      setSex(e.target.value)
    }

    const [month, setMonth] = useState('');
    const handleChangeDate = (value: string) =>{
      setMonth(value);
    }
    const selectedMonth = options.find(item => item.value === month);

    const [sliderValue, setSliderValue] = useState(0);

    const [switcherValue, setSwitcherValue] = useState(false);
    const handleChangeSwitcher = () => {
      setSwitcherValue(prev => !prev)
    }

    const [sliderValueProgress, setSliderValueProgress] = useState(100);
    // useMemo(()=>{
    //   console.log(regForm.email);
    // }, [regForm.email])
    if(!windowOpen){
      return (
      <>
        <Button
          onClick={onShowWindow}
        >
          <Text>Open window</Text>
        </Button>


        <Alert 
          title="Т/С"
          type={AlertType.SUCCESSFULLY}
          isOpen={alertShow} 
          onClose={()=>setAlertShow(false)}
        >
          <Text>Двигатель успешно заведен!</Text>
        </Alert>

        <Alert 
          title="Т/С"
          type={AlertType.ERROR}
          isOpen={secondAlertShow} 
          onClose={()=>setSecondAlertShow(false)}
        >
          <Text>Двигатель заглох...</Text>
        </Alert>

        <Button
          onClick={onShowAlert}
        >
          <Text>Open alert</Text>
        </Button>


        <ModalConfirm
          isOpen={modalConfirm}
          onClose={onCloseModalConfirm}
          onConfirm={() => console.log('You successfully confirmed an action!')}
          title="Покупка грузовика"
        >
          <Text>Ты уверен, что хочешь купить модель грузовика «Flatbed» за 2.490.000$ ?</Text>
        </ModalConfirm>
        <Button
          onClick={onShowModalConfirm}
        >
          <Text>Open ModalConfirm</Text>
        </Button>


        <Notify
          type={NotifyType.SUCCESSFULLY}
          isOpen={notify}
          title="Finance"
          onClose={()=>setNotify(false)}
        >
          <Text>You are successfully bought the Flatbed!</Text>
        </Notify>
        <Notify
          type={NotifyType.SUCCESSFULLY}
          isOpen={notifySecond}
          title="Finance"
          onClose={()=>setNotifySecond(false)}
        >
          <Text>You are successfully sold the Flatbed!</Text>
        </Notify>
        <Button
          onClick={onShowNotify}
        >
          <Text>Show notify</Text>
        </Button>
      </>
       
      )
    }
    return (
        <WindowBrowser
          isOpen={windowOpen}
          onClose={onCloseWindow}
          
          title={<Text font={textFont.TITLE} size={textSize.TITLE}>All items</Text>}
          links={(
            <>
              <Link onClick={()=>{}}><IconLink /> <Text font={textFont.TITLE} size={textSize.IMPORTANT}>Link 1</Text></Link>
              <Link onClick={()=>{}}><IconLink /> <Text font={textFont.TITLE} size={textSize.IMPORTANT}>Link 2</Text></Link>
              <Link onClick={()=>{}} disabled><IconLink /> <Text font={textFont.TITLE} size={textSize.IMPORTANT}>Link 3</Text></Link>
            </>
          )}
        >
          <div style={{display:'inline-flex', flexWrap:'wrap', alignItems:'flex-start'}}>
            <Card>
              <Tape
                title='The latest news'
              >
                 {posts.map((post, index) => 
                  <Post
                      id={index}
                      key={index}
                      title={post.title}
                      subtitle={post.subtitle}
                    >
                      <Text>{post.body}</Text>
                    </Post>
                  )}
              </Tape>
              <Card>
                <form style={{display:'inline-flex', flexDirection:'column', alignItems:'flex-start'}}>
                  <TextField 
                    value={regForm.email}
                    onChange={e => setRegForm({...regForm, email: e.target.value})}
                    limit={32}
                    label="Эл. почта"
                  />
                  <TextField 
                    value={regForm.nickname}
                    onChange={e => setRegForm({...regForm, nickname: e.target.value})}
                    limit={32}
                    label="Имя в игре"
                  />
                  <TextField 
                    value={regForm.password}
                    onChange={e => setRegForm({...regForm, password: e.target.value})}
                    limit={32}
                    label="Пароль"
                    masked
                  />
                  <TextField 
                    value={regForm.confirmPassword}
                    onChange={e => setRegForm({...regForm, confirmPassword: e.target.value})}
                    limit={32}
                    label="Повторите пароль"
                    masked
                  />
                  <Checkbox 
                    id="ConfirmCheckRules"
                    checked={checkTheRules}
                    onChange={toggleCheckTheRules}
                  >
                    <Text>Ознакомился с правилами</Text>
                  </Checkbox>
                  <Button style={{alignSelf:'center'}}><Text>Продолжить</Text></Button>
                  <Link style={{alignSelf:'flex-end'}} onClick={()=>{}} ><Text>Уже есть аккаунт?</Text></Link>
                </form>
              </Card>
            </Card>
            
            <Card style={{display:'flex', flexDirection:'column'}}>
              <span style={{display: 'flex', alignItems:'center'}}>
                  <IconWarning />
                  <Text>Icon warning</Text>
              </span>
              <span style={{display: 'flex', alignItems:'center'}}>
              <IconError />
                  <Text>Icon error</Text>
              </span>
              <span style={{display: 'flex', alignItems:'center'}}>
              <IconSuccessfully />
                  <Text>Icon successfully</Text>
              </span>
              <span style={{display: 'flex', alignItems:'center'}}>
              <IconInfo />
                  <Text>Icon info</Text>
              </span>  
            </Card>
            <Card>
              <div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <Text font={textFont.TITLE} size={textSize.TITLE}>Шрифт Roboto для заголовоков, размер: TITLE</Text>
                    <Text font={textFont.TITLE} size={textSize.SUBTITLE}>Шрифт Roboto для заголовоков, размер: SUBTITLE</Text>
                    <Text font={textFont.TITLE} size={textSize.IMPORTANT}>Шрифт Roboto для заголовоков, размер: IMPORTANT</Text>
                    <Text font={textFont.TITLE} size={textSize.REGULAR}>Шрифт Roboto для заголовоков, размер: REGULAR</Text>
                    <Text font={textFont.TITLE} size={textSize.REGULARSMALL}>Шрифт Roboto для заголовоков, размер: REGULARSMALL</Text>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <Text font={textFont.TITLE} color={textColor.MAIN}>Шрифт Roboto для заголовоков, тема: основной</Text>
                    <Text font={textFont.TITLE} color={textColor.SECONDARY}>Шрифт Roboto для заголовоков, тема: второстепенный</Text>
                    <Text font={textFont.TITLE} color={textColor.WARNING}>Шрифт Roboto для заголовоков, тема: предупреждение</Text>
                    <Text font={textFont.TITLE} color={textColor.ERROR}>Шрифт Roboto для заголовоков, тема: ошибка</Text>
                    <Text font={textFont.TITLE} color={textColor.SUCCESSFULLY}>Шрифт Roboto для заголовоков, тема: успешно выполнено</Text>
                    <Text font={textFont.TITLE} color={textColor.INFORMATION}>Шрифт Roboto для заголовоков, тема: информация</Text>
                </div>
              </div>
              <div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <Text font={textFont.MAIN} size={textSize.TITLE}>Шрифт Roboto основной, размер: TITLE</Text>
                    <Text font={textFont.MAIN} size={textSize.SUBTITLE}>Шрифт Roboto основной, размер: SUBTITLE</Text>
                    <Text font={textFont.MAIN} size={textSize.IMPORTANT}>Шрифт Roboto основной, размер: IMPORTANT</Text>
                    <Text font={textFont.MAIN} size={textSize.REGULAR}>Шрифт Roboto основной, размер: REGULAR</Text>
                    <Text font={textFont.MAIN} size={textSize.REGULARSMALL}>Шрифт Roboto для заголовоков, размер: REGULARSMALL</Text>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <Text font={textFont.MAIN} color={textColor.MAIN}>Шрифт Roboto основной, тема: основной</Text>
                    <Text font={textFont.MAIN} color={textColor.SECONDARY}>Шрифт Roboto основной, тема: второстепенный</Text>
                    <Text font={textFont.MAIN} color={textColor.WARNING}>Шрифт Roboto основной, тема: предупреждение</Text>
                    <Text font={textFont.MAIN} color={textColor.ERROR}>Шрифт Roboto основной, тема: ошибка</Text>
                    <Text font={textFont.MAIN} color={textColor.SUCCESSFULLY}>Шрифт Roboto основной, тема: успешно выполнено</Text>
                    <Text font={textFont.MAIN} color={textColor.INFORMATION}>Шрифт Roboto основной, тема: информация</Text>
                </div>
              </div>
            </Card>
            
            <Card style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
              <TextArea 
                label="Describe your character"
                limit={120}
                value={descriptionCharacter}
                onChange={e => setDescriptionCharacter(e.target.value)}
              />
              <RadioGroup
                name='UItest'
                onChange={handleChangeSex}
                options={[
                  {value: 'male', description: 'Male', defaultChecked: true},
                  {value: 'female', description: 'Female'},
                  {value: 'trans', description: 'Hz', disabled:true},
                ]}
              />
              <Select
                placeholder='Выберите месяц'
                options={options}
                selected={selectedMonth || null}
                onChange={handleChangeDate}
              />
              <Slider 
                min={0}
                max={100}
                value={sliderValue}
                step={10}
                onChange={e => setSliderValue(Number(e.target.value))}
              />
              <Switcher 
                id="UItest__Switcher"
                value={switcherValue}
                onChange={handleChangeSwitcher}
              />
              <Link onClick={handleChangeSwitcher}><Text>Переключить Switcher</Text></Link>
            </Card>
           
            <Card style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <ProgressBar 
                    value={10}
                    max={100}
                  />
                  <ProgressBar 
                    value={50}
                    max={100}
                  />
                  <ProgressBar 
                    value={60}
                    max={100}
                  />
                  <ProgressBar 
                    value={80}
                    max={100}
                  />
                  <ProgressBar 
                    value={sliderValueProgress}
                    max={100}
                  />
                </div>
                <div style={{display:'flex'}}>
                <ProgressBar 
                    value={10}
                    max={100}
                    type={ProgressBarType.VERTICAL}
                  />
                  <ProgressBar 
                    value={50}
                    max={100}
                    type={ProgressBarType.VERTICAL}
                  />
                  <ProgressBar 
                    value={60}
                    max={100}
                    type={ProgressBarType.VERTICAL}
                  />
                  <ProgressBar 
                    value={80}
                    max={100}
                    type={ProgressBarType.VERTICAL}
                  />
                  <ProgressBar 
                    value={sliderValueProgress}
                    max={100}
                    type={ProgressBarType.VERTICAL}
                  />
                </div>
                <Slider 
                  min={0}
                  max={100}
                  value={sliderValueProgress}
                  step={5}
                  onChange={e => setSliderValueProgress(Number(e.target.value))}
                />
            </Card>
            
            <Card>
              <NavBar>
                <Link onClick={onShowModal}><Text size={textSize.REGULAR}>Список игроков</Text></Link>
                <Link onClick={onShowSecondAlert}><Text size={textSize.REGULAR}>Good life</Text></Link>
                <Link onClick={()=>{}}><Text size={textSize.REGULAR}>Донаты</Text></Link>
              </NavBar>

              <Alert 
                title="Т/С"
                type={AlertType.ERROR}
                isOpen={secondAlertShow} 
                onClose={()=>setSecondAlertShow(false)}
              >
                <Text>Двигатель заглох...</Text>
              </Alert>
              <Modal
                  isOpen={isModal}
                  onClose={onCloseModal}
                  lazy
              >
                  <Table>
                      <TableCaption>
                          <Text font={textFont.TITLE} size={textSize.SUBTITLE}>The vip players</Text>
                      </TableCaption>

                      {/* <TableContent> */}
                        <TableHead>
                          <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 50}}><Text font={textFont.TITLE} size={textSize.REGULAR}>ID</Text></TableData>
                            <TableData style={{display:'inline-flex', justifyContent:'center', width: 200}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Name</Text></TableData>
                            <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Rank</Text></TableData>
                            <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Score</Text></TableData>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <Loader
                            size={LoaderSize.BIG}
                          >
                            <Text>Loading...</Text>
                          </Loader>
                        </TableBody>
                      {/* </TableContent> */}
                  </Table>
              </Modal>
            </Card>
            
            <Card>
                <Table>
                    <TableCaption>
                        <Text font={textFont.TITLE} size={textSize.SUBTITLE}>Validations</Text>
                    </TableCaption>

                    <TableContent className="Table__Big">
                      <TableHead>
                        <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Компонент</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Дефолт</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Предупреждение</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Ошибка</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Успешно</Text></TableData>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>TextField</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <TextField 
                              valid={validationStatus.DEFAULT}
                              value={regForm.email}
                              onChange={e => setRegForm({...regForm, email: e.target.value})}
                              limit={32}
                              label="Эл. почта"
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <TextField 
                              valid={validationStatus.WARNING}
                              value={regForm.email}
                              onChange={e => setRegForm({...regForm, email: e.target.value})}
                              limit={32}
                              label="Эл. почта"
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <TextField 
                              valid={validationStatus.ERROR}
                              value={regForm.email}
                              onChange={e => setRegForm({...regForm, email: e.target.value})}
                              limit={32}
                              label="Эл. почта"
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <TextField 
                              valid={validationStatus.SUCCESSFULLY}
                              value={regForm.email}
                              onChange={e => setRegForm({...regForm, email: e.target.value})}
                              limit={32}
                              label="Эл. почта"
                            />
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Button</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Button style={{alignSelf:'center'}} valid={validationStatus.DEFAULT}><Text>Продолжить</Text></Button>
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Button style={{alignSelf:'center'}} valid={validationStatus.WARNING}><Text>Продолжить</Text></Button>
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Button style={{alignSelf:'center'}} valid={validationStatus.ERROR}><Text>Продолжить</Text></Button>
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Button style={{alignSelf:'center'}} valid={validationStatus.SUCCESSFULLY}><Text>Продолжить</Text></Button>
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>TextArea</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <TextArea 
                              valid={validationStatus.DEFAULT}
                              label="Describe your character"
                              rows={4}
                              cols={20}
                              limit={50}
                              value={descriptionCharacter}
                              onChange={e => setDescriptionCharacter(e.target.value)}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <TextArea 
                              valid={validationStatus.WARNING}
                              label="Describe your character"
                              rows={4}
                              cols={20}
                              limit={50}
                              value={descriptionCharacter}
                              onChange={e => setDescriptionCharacter(e.target.value)}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <TextArea 
                              valid={validationStatus.ERROR}
                              label="Describe your character"
                              rows={4}
                              cols={20}
                              limit={50}
                              value={descriptionCharacter}
                              onChange={e => setDescriptionCharacter(e.target.value)}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <TextArea 
                              valid={validationStatus.SUCCESSFULLY}
                              label="Describe your character"
                              rows={4}
                              cols={20}
                              limit={50}
                              value={descriptionCharacter}
                              onChange={e => setDescriptionCharacter(e.target.value)}
                            />
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>RadioGroup</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <RadioGroup
                              valid={validationStatus.DEFAULT}
                              name='UItest'
                              onChange={handleChangeSex}
                              options={[
                                {value: 'male', description: 'Male', defaultChecked: true},
                                {value: 'female', description: 'Female'},
                                {value: 'trans', description: 'Hz', disabled:true},
                              ]}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <RadioGroup
                              valid={validationStatus.WARNING}
                              name='UItest'
                              onChange={handleChangeSex}
                              options={[
                                {value: 'male', description: 'Male', defaultChecked: true},
                                {value: 'female', description: 'Female'},
                                {value: 'trans', description: 'Hz', disabled:true},
                              ]}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <RadioGroup
                              valid={validationStatus.ERROR}
                              name='UItest'
                              onChange={handleChangeSex}
                              options={[
                                {value: 'male', description: 'Male', defaultChecked: true},
                                {value: 'female', description: 'Female'},
                                {value: 'trans', description: 'Hz', disabled:true},
                              ]}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <RadioGroup
                              valid={validationStatus.SUCCESSFULLY}
                              name='UItest'
                              onChange={handleChangeSex}
                              options={[
                                {value: 'male', description: 'Male', defaultChecked: true},
                                {value: 'female', description: 'Female'},
                                {value: 'trans', description: 'Hz', disabled:true},
                              ]}
                            />
                          </TableData>
                        </TableRow>

                        <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Select</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Select
                              valid={validationStatus.DEFAULT}
                              placeholder='Выберите месяц'
                              options={options}
                              selected={selectedMonth || null}
                              onChange={handleChangeDate}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Select
                              valid={validationStatus.WARNING}
                              placeholder='Выберите месяц'
                              options={options}
                              selected={selectedMonth || null}
                              onChange={handleChangeDate}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Select
                              valid={validationStatus.ERROR}
                              placeholder='Выберите месяц'
                              options={options}
                              selected={selectedMonth || null}
                              onChange={handleChangeDate}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Select
                              valid={validationStatus.SUCCESSFULLY}
                              placeholder='Выберите месяц'
                              options={options}
                              selected={selectedMonth || null}
                              onChange={handleChangeDate}
                            />
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Slider</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Slider 
                              valid={validationStatus.DEFAULT}
                              min={0}
                              max={100}
                              value={sliderValue}
                              step={10}
                              onChange={e => setSliderValue(Number(e.target.value))}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Slider 
                              valid={validationStatus.WARNING}
                              min={0}
                              max={100}
                              value={sliderValue}
                              step={10}
                              onChange={e => setSliderValue(Number(e.target.value))}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Slider 
                              valid={validationStatus.ERROR}
                              min={0}
                              max={100}
                              value={sliderValue}
                              step={10}
                              onChange={e => setSliderValue(Number(e.target.value))}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Slider 
                              valid={validationStatus.SUCCESSFULLY}
                              min={0}
                              max={100}
                              value={sliderValue}
                              step={10}
                              onChange={e => setSliderValue(Number(e.target.value))}
                            />
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Switcher</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Switcher 
                              valid={validationStatus.DEFAULT}
                              id="UItest__Switcher"
                              value={switcherValue}
                              onChange={handleChangeSwitcher}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Switcher 
                              valid={validationStatus.WARNING}
                              id="UItest__Switcher"
                              value={switcherValue}
                              onChange={handleChangeSwitcher}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Switcher 
                              valid={validationStatus.ERROR}
                              id="UItest__Switcher"
                              value={switcherValue}
                              onChange={handleChangeSwitcher}
                            />
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Switcher 
                              valid={validationStatus.SUCCESSFULLY}
                              id="UItest__Switcher"
                              value={switcherValue}
                              onChange={handleChangeSwitcher}
                            />
                          </TableData>
                        </TableRow>
                        <TableRow>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Checkbox</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Checkbox 
                              valid={validationStatus.DEFAULT}
                              id="ConfirmCheckRules"
                              checked={checkTheRules}
                              onChange={toggleCheckTheRules}
                            >
                              <Text>check</Text>
                            </Checkbox>
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Checkbox 
                              valid={validationStatus.WARNING}
                              id="ConfirmCheckRules"
                              checked={checkTheRules}
                              onChange={toggleCheckTheRules}
                            >
                              <Text>check</Text>
                            </Checkbox>
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Checkbox 
                              valid={validationStatus.ERROR}
                              id="ConfirmCheckRules"
                              checked={checkTheRules}
                              onChange={toggleCheckTheRules}
                            >
                              <Text>check</Text>
                            </Checkbox>
                          </TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 300}}>
                            <Checkbox 
                              valid={validationStatus.SUCCESSFULLY}
                              id="ConfirmCheckRules"
                              checked={checkTheRules}
                              onChange={toggleCheckTheRules}
                            >
                              <Text>check</Text>
                            </Checkbox>
                          </TableData>
                        </TableRow>
                      </TableBody>
                    </TableContent>
                </Table>
            </Card>
            <Card style={{display:'flex', flexDirection:'column'}}>
              <Button
                onClick={onShowWindow}
              >
                <Text>Open window</Text>
              </Button>


              <Alert 
                title="Т/С"
                type={AlertType.SUCCESSFULLY}
                isOpen={alertShow} 
                onClose={()=>setAlertShow(false)}
              >
                <Text>Двигатель успешно заведен!</Text>
              </Alert>

              <Alert 
                title="Т/С"
                type={AlertType.ERROR}
                isOpen={secondAlertShow} 
                onClose={()=>setSecondAlertShow(false)}
              >
                <Text>Двигатель заглох...</Text>
              </Alert>

              <Button
                onClick={onShowAlert}
              >
                <Text>Open alert</Text>
              </Button>


              <ModalConfirm
                isOpen={modalConfirm}
                onClose={onCloseModalConfirm}
                onConfirm={() => console.log('You successfully confirmed an action!')}
                title="Покупка грузовика"
              >
                <Text>Ты уверен, что хочешь купить модель грузовика «Flatbed» за 2.490.000$ ?</Text>
              </ModalConfirm>
              <Button
                onClick={onShowModalConfirm}
              >
                <Text>Open ModalConfirm</Text>
              </Button>


              <Notify
                type={NotifyType.SUCCESSFULLY}
                isOpen={notify}
                title="Finance"
                onClose={()=>setNotify(false)}
              >
                <Text>You are successfully bought the Flatbed!</Text>
              </Notify>
              <Notify
                type={NotifyType.SUCCESSFULLY}
                isOpen={notifySecond}
                title="Finance"
                onClose={()=>setNotifySecond(false)}
              >
                <Text>You are successfully sold the Flatbed!</Text>
              </Notify>
              <Button
                onClick={onShowNotify}
              >
                <Text>Show notify</Text>
              </Button>
            </Card>
          </div>
        </WindowBrowser>
    )
};

export default UITest;