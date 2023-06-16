import { TargetType } from '@/ts/core';
import React from 'react';
import * as im from 'react-icons/im';

interface TypeIconInfo {
  avatar?: boolean;
  size?: number;
  iconType: string;
}

/** 类型图标 */
const TypeIcon = ({ avatar, iconType, size }: TypeIconInfo) => {
  const iconSize = size || 12;
  const loadIcon = () => {
    switch (iconType) {
      case '目录':
        return <im.ImFolder size={iconSize} />;
      case 'newDir':
        return <im.ImFolderPlus size={iconSize} />;
      case '字典':
      case 'newDict':
        return <im.ImBook size={iconSize} />;
      case '分类':
      case 'newSpecies':
        return <im.ImTree size={iconSize} />;
      case '属性':
      case 'newProperty':
        return <im.ImJoomla size={iconSize} />;
      case '应用':
      case 'newApp':
        return <im.ImDropbox size={iconSize} />;
      case '事项配置':
      case 'newWorkConfig':
        return <im.ImInsertTemplate size={iconSize} />;
      case '实体配置':
      case 'newThingConfig':
        return <im.ImPaste size={iconSize} />;
      case '角色':
      case 'newIdentity':
        return <im.ImKey size={iconSize} />;
      case '权限':
      case 'settingAuth':
        return <im.ImShield size={iconSize} />;
      case TargetType.Company:
      case TargetType.University:
      case TargetType.Hospital:
      case 'newCompany':
        return <im.ImOffice size={iconSize} />;
      case TargetType.Station:
      case 'newStation':
        return <im.ImAddressBook size={iconSize} />;
      case TargetType.Group:
      case 'newGroup':
        return <im.ImTree size={iconSize} />;
      case TargetType.Cohort:
      case 'newCohort':
        return <im.ImBubbles2 size={iconSize} />;
      case TargetType.Section:
      case TargetType.Department:
      case 'newDepartment':
        return <im.ImLibrary size={iconSize} />;
      case TargetType.Person:
        return <im.ImUserTie size={iconSize} />;
      case TargetType.College:
        return <im.ImTrophy size={iconSize} />;
      case TargetType.Laboratory:
        return <im.ImJoomla size={iconSize} />;
      case TargetType.Office:
        return <im.ImBriefcase size={iconSize} />;
      case TargetType.Research:
        return <im.ImFlickr4 size={iconSize} />;
      case TargetType.Working:
        return <im.ImUsers size={iconSize} />;
      case 'refresh':
        return <im.ImSpinner9 size={iconSize} />;
      case 'remark':
        return <im.ImWrench size={iconSize} />;
      case 'open':
        return <im.ImDelicious size={iconSize} />;
      case 'copy':
        return <im.ImCopy size={iconSize} />;
      case 'move':
        return <im.ImShuffle size={iconSize} />;
      case 'rename':
        return <im.ImPencil size={iconSize} />;
      case 'delete':
        return <im.ImBin size={iconSize} />;
      case 'remove':
        return <im.ImUserMinus size={iconSize} />;
      case 'update':
        return <im.ImPriceTags size={iconSize} />;
      case 'pull':
        return <im.ImUserPlus size={iconSize} />;
      default:
        return <im.ImFilesEmpty size={iconSize} />;
    }
  };
  if (avatar) {
    return loadIcon();
  }
  return <div style={{ paddingRight: 10 }}>{loadIcon()}</div>;
};

export default TypeIcon;
