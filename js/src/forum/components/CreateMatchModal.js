import app from 'flarum/forum/app';

import Button from 'flarum/common/components/Button';
import Modal from 'flarum/common/components/Modal';
import Switch from 'flarum/common/components/Switch';
import Stream from 'flarum/common/utils/Stream';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';

const CurrentDate = dayjs().format('YYYY-MM-DD');
const CurrentTime = dayjs().format('HH:mm');

export default class CreateMatchModal extends Modal {
  loading = false;

  date;
  time;

  oninit(vnode) {
    super.oninit(vnode);

    this.date = CurrentDate;
    this.time = CurrentTime;
    this.pickUpPoint='xm';
    this.destination='xm';
  }

  title() {
    return '发起拼车匹配';
  }

  className() {
    return 'MatchDiscussionModal Modal--small';
  }

  configDatePicker(vnode) {
  }

  content() {
    return [
      <div className="Modal-body">
        <div className="MatchDiscussionModal-form">
          <div className="Form-group">
            <label className="label">{'出发地点'}</label>
            <select
              class="Select-input FormControl"
              value={this.pickUpPoint}
              onchange={(e) => (this.pickUpPoint = e.target.value)}>
              <option value='xm'>交大西门</option>
              <option value='tf'>天府国际机场</option>
              <option value='sl'>双流国际机场</option>
              <option value='dz'>成都东站</option>
              <option value='nz'>成都南站</option>
            </select>
          </div>
          <div className="Form-group">
            <label className="label">{'到达地点'}</label>
            <select
              class="Select-input FormControl"
              value={this.destination}
              onchange={(e) => (this.destination = e.target.value)}>
              <option value='xm'>交大西门</option>
              <option value='tf'>天府国际机场</option>
              <option value='sl'>双流国际机场</option>
              <option value='dz'>成都东站</option>
              <option value='nz'>成都南站</option>
              </select>
          </div>
          <div className='Form-group CreateMatchModal-timeDateGroup'>
            <label class="label">{'出发时间'}</label>
              <input
                name="scheduledLeaveDate"
                class="FormControl"
                type="date"
                min={CurrentDate}
                value={this.date}
                onchange={(e) => (this.date = e.target.value)}
              />
              <input
                name="scheduledLeaveTime"
                class="FormControl"
                type="time"
                value={this.time}
                onchange={(e) => (this.time = e.target.value)}
              />
          </div>
          <div className="Form-group">
            <label className="label">{'最长可等待 [单位：分钟,只填数字,最多720]'}</label>
            <input
              type="text"
              class="FormControl"
              value={this.maxWait}
              onchange={(e) => (this.maxWait = e.target.value)}
              min={0}
            />
          </div>
          <div className="Form-group">
            <label className="label">{'你的性别'}</label>
              <select
                class="Select-input FormControl"
                value={this.sex}
                onchange={(e) => (this.sex = e.target.value)}>>
                <option value='non'>保密</option>
                <option value='boy'>男</option>
                <option value='girl'>女</option>
              </select>
          </div>
          <div className="Form-group">
            <label className="label">{'联系方式（可匹配后自行沟通）'}</label>
            <input
              type="text"
              class="FormControl"
              value={this.contact}
              onchange={(e) => (this.contact = e.target.value)}
            />
          </div>
          <div className="Form-group">
            <label className="label">{'附加信息（非必填，支持Markdown）'}</label>
            <input
              type="text"
              class="FormControl"
              value={this.message}
              onchange={(e) => (this.message = e.target.value)}
            />
          </div>

          <div className="Form-group">
            {Button.component(
              {
                type: 'submit',
                className: 'Button Button--primary MatchModal-SubmitButton',
                loading: this.loading,
              },
              '开始匹配'
            )}
          </div>
        </div>
      </div>
    ]
  }

  getLocationName(a) {
    switch (a) {
      case 'xm' :
        return '交大西门'
      case 'tf' :
        return '天府国际机场'
      case 'sl' :
        return '双流国际机场'
      case 'dz' :
        return '成都东站'
      case 'nz' :
        return '成都南站'
    }
  }
  getSexName(a){
    switch (a) {
      case 'non' :
        return '保密';
      case 'boy' :
        return '男';
      case 'girl':
        return '女';
      default:
        return '未填写';
    }
  }

  onsubmit(e) {
    e.preventDefault();
    if (!this.pickUpPoint || !this.destination) {
      window.alert('请填写出发地和目的地');
      return;
    } else if (this.pickUpPoint == this.destination) {
      window.alert('出发地和目的地不能一样');
      return;
    }
    if (!this.date || !this.time) {
      window.alert('请填写出发时间');
      return;
    } else if (this.time < CurrentTime) {
      if (this.date <= CurrentDate) {
        window.alert('出发时间必须晚于当前时间');
        return;
      }
    }
    if (isNaN(this.maxWait)) {
      window.alert('请在最长等待时间中填写阿拉伯数字');
      return;
    } else if (this.maxWait < 0 || this.maxWait > 720) {
      window.alert('最长等待时间必须大于等于0, 小于等于720');
      return;
    }
    const title = '[拼车]'+this.date + ' ' + this.time + '[' + this.getLocationName(this.pickUpPoint) + ']-[' + this.getLocationName(this.destination) + ']'
    const content = '------\n'+'#### 出发地点：' + this.getLocationName(this.pickUpPoint) + '\n' +
      '#### 到达地点：' + this.getLocationName(this.destination) + '\n' +
      '#### 出发时间：' + this.date + ' ' + this.time + '\n' +
      '#### 最多等待：' + this.maxWait + '分钟\n------\n' +
      '#### 性别：' + this.getSexName(this.sex) + '\n' + '------\n' +
      '#### 联系方式：\n' + (this.contact ? undefined :  '未填写') + '\n'+
      '#### 附加信息：\n' + (this.message ? undefined :  '未填写') + '\n ------- \n' +
      '> ## 安全提醒!!!\n' +
      '1. 建议您在拼车成功后，立即联系对方，并充分沟通上车时间、地点等问题，以确保拼车过程一切顺利。\n' +
      '2. 论坛只能确认该账户绑定了交大邮箱，并不能确定该拼车申请是否由该邮箱账号的持有者发起。\n' +
      '为了您的安全，请在联系上对方后，向对方索要学生证、一卡通的照片，或者其它基本个人信息，以进一步确认对方的本校学生身份。若对方拒不提供任何基本个人信息，或见面时，发现对方谎报个人信息，建议您立即停止拼车。\n' +
      '3. 为了您的安全，请向您的朋友分享行程，路途中请保持清醒和警惕。\n' +
      '4. 为了您的安全，请尽量选择滴滴、美团等知名网约车平台，不要乘坐没有资质的网约车。\n' +
      '5. 如果行程中您受到了骚扰，请及时报警，并向论坛反映情况，我们会全力配合调查。'+'\n\n' +
      '> ## 注意事项：\n' +
      '1. 建议您开启邮件通知，并在交大邮箱设置中，将所有邮件转发到你的常用邮箱，以便及时接收匹配信息。\n[点我，查看打开邮件通知的方法](https://mcfuntime.com/d/90/13)\n' +
      '2. 匹配完成后，请及时为帖子设置最佳回复或删除帖子，以免重复匹配。\n'+
      '3. 若在您的上车时间到达后仍未匹配成功，请删除您的帖子。之后若用户数量增多，我们会提供自动匹配服务，以提高匹配成功的概率。\n'+'\n> ------- \n';
    console.log('update')

    const datas = {
      title: title,
      content: content,
      relationships: {
        tags: {
          data: {
            type: "tags",
            id: "4" ,
          },
        }
      }
    }




    console.log(JSON.stringify(datas))
    app.store
      .createRecord('discussions')
      .save(datas)
      .then((discussion) => {
        app.discussions.refresh({deferClear: true});
        m.route.set(app.route.discussion(discussion));
      },);
    console.log(JSON.stringify(datas))
    app.composer.close()
  }
}

